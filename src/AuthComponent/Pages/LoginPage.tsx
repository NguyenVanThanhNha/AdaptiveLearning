import React from 'react'
import styled from 'styled-components'
import { Field, Form, Formik } from 'formik'
import * as yup from 'yup'
import Button from '../Buttons/Button'
import Input from '../Input'
import { TextSubtitle, TextTitle } from '../Styles/TextStyles'
import loginIllustration from '../../assets/illustrations/login.svg'
import InlineLink from '../InlineLink'
import Card from '../Cards/Card'

interface LoginPageProps {
  handleView: React.Dispatch<React.SetStateAction<string>>
  mailSignin: (data: { username: string; password: string }) => Promise<void>
}

const validationSchema = yup.object({
  username: yup.string().required().max(255),
  password: yup.string().required().min(8),
})

const LoginPage: React.FC<LoginPageProps> = ({ handleView, mailSignin }) => (
  <Card alt="login page" imageSrc={loginIllustration}>
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(data, { setSubmitting, resetForm }) => {
        setSubmitting(true)
        mailSignin(data)
        setSubmitting(false)
        resetForm()
      }}
    >
      {({ values, isSubmitting }) => (
        <Form>
          <LeftContainer>
            <TextContainer>
              <Title>Log in</Title>
              <Subtitle>It&apos;s great to have you back.</Subtitle>
            </TextContainer>
            <InputContainer>
              <Field name="username" label="User name" type="text" as={Input} />
              <Field name="password" label="Password" type="password" as={Input} />
            </InputContainer>
            <ButtonContainer>
              <Button text="Log in" disabled={isSubmitting} type="submit" />
            </ButtonContainer>
            <ExtraContainer>
              <InlineLink
                text="Log in with social media?"
                textLink="Social log in"
                handleView={() => handleView('social')}
              />
              <InlineLink
                text="Don't have an account?"
                textLink="Sign up!"
                handleView={() => handleView('signup')}
              />
              <InlineLink
                text="Forgot your password?"
                textLink="Reset password"
                handleView={() => handleView('reset')}
              />
            </ExtraContainer>
          </LeftContainer>
        </Form>
      )}
    </Formik>
  </Card>
)

const LeftContainer = styled.div`
  align-content: center;
  display: grid;
  gap: 1.5em;
  grid-template-rows: repeat(3, min-content);
  height: 100%;
  width: 320px;
`

const TextContainer = styled.div`
  display: grid;
  gap: 0.2em;
`

const Title = styled(TextTitle)``

const Subtitle = styled(TextSubtitle)``

const InputContainer = styled.div`
  display: grid;
  gap: 1em;
`

const ButtonContainer = styled.div``

const ExtraContainer = styled.div`
  display: grid;
  gap: 0.5em;
  grid-template-rows: repeat(2, min-content);
`

export default LoginPage
