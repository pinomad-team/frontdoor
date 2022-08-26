import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { authState, AuthStep } from 'src/state/auth';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Typography,
} from '@material-tailwind/react';
import parsePhoneNumberFromString, { AsYouType } from 'libphonenumber-js';
import { Loading } from './loading';

const COUNTRY = 'KR';

const PhoneNumberSignInForm: React.FC = observer(() => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const number = parsePhoneNumberFromString(phoneNumber, COUNTRY);
    if (number && number.isValid()) {
      setIsValid(true);
    }
  }, [phoneNumber]);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (isValid) {
          const parsedNumber = parsePhoneNumberFromString(phoneNumber, COUNTRY);
          if (parsedNumber) {
            authState.authenticateWithPhoneNumber(parsedNumber.number);
            authState.authStep = AuthStep.CONFIRMATION_CODE;
          }
        }
      }}
    >
      <Card className="w-80">
        <CardHeader className="flex h-28 justify-center items-center">
          <Typography variant="h4">Pinomad Login</Typography>
        </CardHeader>
        <CardBody className="flex flex-col">
          <Input
            label="휴대폰 번호"
            className="font-extrabold"
            size="lg"
            value={phoneNumber}
            onChange={(event) => {
              const number = event.target.value;
              const asYouTypeKR = new AsYouType(COUNTRY);
              const formatted = asYouTypeKR.input(number);
              setPhoneNumber(formatted);
            }}
          />
        </CardBody>
        <CardFooter>
          <Button fullWidth type="submit" disabled={!isValid}>
            시작하기
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
});

const PhoneNumberConfirmationForm: React.FC = observer(() => {
  const [confirmationCode, setConfirmationCode] = useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (authState.isConfirmationResultAvailable) {
          authState.confirmCode(confirmationCode);
        }
      }}
    >
      <Card className="w-80">
        <CardHeader className="flex h-28 justify-center items-center">
          <Typography variant="h4">인증번호</Typography>
        </CardHeader>
        <CardBody className="flex flex-col">
          <Input
            label="인증번호"
            className="font-extrabold"
            size="lg"
            value={confirmationCode}
            onChange={(event) => {
              event.preventDefault();
              const value = event.target.value;
              setConfirmationCode(value.replace(/[^.\d]/g, '').substring(0, 6));
            }}
          />
        </CardBody>
        <CardFooter>
          <Button fullWidth type="submit">
            인증하기
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
});

export const AuthComponent: React.FC = observer(() => {
  switch (authState.authStep) {
    case AuthStep.LOADING:
      return <Loading />;
    case AuthStep.LOGIN:
      return <PhoneNumberSignInForm />;
    case AuthStep.CONFIRMATION_CODE:
      return <PhoneNumberConfirmationForm />;
    default:
      return <></>;
  }
});
