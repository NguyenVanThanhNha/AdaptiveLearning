import React from 'react'
import styled from 'styled-components'
import { Field, Form, Formik } from 'formik'
import * as yup from 'yup'
import Button from '../Buttons/Button'
import Input from '../Input'
import { TextSubtitle, TextTitle } from '../Styles/TextStyles'
import resetIllustration from '../../assets/illustrations/reset.svg'
import InlineLink from '../InlineLink'
import Card from '../Cards/Card'

interface ResetPageProps {
  handleView: React.Dispatch<React.SetStateAction<string>>
  resetPassword: (data: { email: string }) => Promise<void>
}

const validationSchema = yup.object({
  email: yup.string().required().max(255),
})

const ResetPage: React.FC<ResetPageProps> = ({ handleView, resetPassword }) => (
  <Card alt="reset password page" imageSrc={resetIllustration}>
    <Formik
      initialValues={{ email: '' }}
      validationSchema={validationSchema}
      onSubmit={(data, { setSubmitting, resetForm }) => {
        setSubmitting(true)
        resetPassword(data)
        setSubmitting(false)
        resetForm()
      }}
    >
      {({ values, isSubmitting }) => (
        <Form>
          <LeftContainer>
            <TextContainer>
              <Title>Reset password</Title>
              <Subtitle>We will send you a link to reset your account password.</Subtitle>
            </TextContainer>
            <InputContainer>
              <Field name="email" label="Email Address" type="email" as={Input} />
            </InputContainer>
            <ButtonContainer>
              <Button text="Reset password" disabled={isSubmitting} type="submit" />
            </ButtonContainer>
            <ExtraContainer>
              <InlineLink
                text="Already have an account?"
                textLink="Log in!"
                handleView={() => handleView('login')}
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

export default ResetPage
