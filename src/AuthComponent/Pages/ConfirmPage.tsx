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
  mailConfirm: (data: {authCode: string }) => Promise<void>
}

const validationSchema = yup.object({
  authCode: yup.string().required().min(6),
})

const ConfirmPage: React.FC<LoginPageProps> = ({ handleView, mailConfirm }) => (
  <Card alt="Confirm page" imageSrc={loginIllustration}>
    <Formik
      initialValues={{ authCode: ''}}
      validationSchema={validationSchema}
      onSubmit={(data, { setSubmitting, resetForm }) => {
        setSubmitting(true)
        mailConfirm(data)
        setSubmitting(false)
        resetForm()
      }}
    >
      {({ values, isSubmitting }) => (
        <Form>
          <LeftContainer>
            <TextContainer>
              <Title>Confirm</Title>
              <Subtitle>Confirm your mail.</Subtitle>
            </TextContainer>
            <InputContainer>
              <Field name="authCode" label="authCode" type="text" as={Input} />
            </InputContainer>
            <ButtonContainer>
              <Button text="Confirm" disabled={isSubmitting} type="submit" />
            </ButtonContainer>
            <ExtraContainer>
              <InlineLink
                text="You have already an account?"
                textLink="Sign in!"
                handleView={() => handleView('signin')}
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

export default ConfirmPage
