import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Typography,
} from '@material-tailwind/react';
import parsePhoneNumberFromString from 'libphonenumber-js';
import { observer } from 'mobx-react-lite';
import React, { ReactFragment, ReactNode } from 'react';
import { authState } from 'src/state/auth';
import { profileState, ProfileStep } from 'src/state/profile';
import { Loading } from './loading';

type ProfileFormProps = {
  heading?: ReactNode;
  buttons?: ReactNode | ReactFragment;
};

const logoutButton = (
  <Button
    variant="outlined"
    onClick={() => {
      authState.signOut();
    }}
    type="button"
  >
    로그아웃
  </Button>
);

export const ProfileForm: React.FC<ProfileFormProps> = observer(
  ({ heading, buttons }) => {
    return (
      <Card className="w-96">
        <CardHeader
          color="red"
          className="flex h-28 justify-center items-center"
        >
          <Typography variant="h4" className="font-extrabold">
            {heading}
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input
            label="이름"
            value={profileState.profile?.name}
            onChange={(event) => {
              profileState.name = event.target.value;
            }}
          />
          <Input
            label="표시명"
            value={profileState.profile?.displayName}
            onChange={(event) => {
              profileState.displayName = event.target.value;
            }}
          />
          <Input
            label="휴대폰 번호"
            className="bg-gray-100"
            value={parsePhoneNumberFromString(
              profileState.profile?.phoneNumber,
            ).formatNational()}
            readOnly
          />
          <div className="flex flex-row justify-between">{buttons}</div>
        </CardBody>
      </Card>
    );
  },
);

export const CreateProfileForm: React.FC = observer(() => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        profileState.createProfile();
      }}
    >
      <ProfileForm
        heading="Pinomad에서 시작하기"
        buttons={
          <>
            <Button type="submit">생성하기</Button>
            {logoutButton}
          </>
        }
      />
    </form>
  );
});

export const EditProfileForm: React.FC = observer(() => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        profileState.updateProfile();
      }}
    >
      <ProfileForm
        heading={`내 프로필`}
        buttons={
          <>
            <Button type="submit">프로필 수정</Button>
            <Button
              type="button"
              variant="outlined"
              onClick={() => {
                profileState.deleteProfile();
              }}
            >
              프로필 삭제
            </Button>
            {logoutButton}
          </>
        }
      />
    </form>
  );
});

export const ProfileComponent: React.FC = observer(() => {
  switch (profileState.profileStep) {
    case ProfileStep.LOADING:
      return <Loading />;
    case ProfileStep.NOT_ONBOARDED:
      return <CreateProfileForm />;
    case ProfileStep.PROFILE_CREATED:
      return <EditProfileForm />;
    default:
      return <></>;
  }
});
