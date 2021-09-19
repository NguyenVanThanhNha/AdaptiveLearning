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
import { Link }  from "react-router-dom";


interface LoginPageProps {
  handleView: React.Dispatch<React.SetStateAction<string>>
  welcomePage: (data: { email: string; password: string }) => Promise<void>
}

const validationSchema = yup.object({
  email: yup.string().required().max(255),
  password: yup.string().required().min(8),
})

const WelcomePage: React.FC<LoginPageProps> = ({ handleView, welcomePage }) => (
  <Card alt="login page" imageSrc={loginIllustration}>
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(data, { setSubmitting, resetForm }) => {
        setSubmitting(true)
        welcomePage(data)

      }}
    >
      {({ values, isSubmitting }) => (
        <Form>
          <LeftContainer>
            <TextContainer>
              <Title>Welcome my FRIEND!</Title>
              <Subtitle>It&apos;s great to have you back.</Subtitle>
            </TextContainer>
            <ButtonContainer>
              <li className="menu-item"><Link className="deneb_btn" to="/dashboard">Learn Now</Link></li>
            </ButtonContainer>
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

export default WelcomePage
