/* eslint-disable indent */
import React from 'react'
import styled from 'styled-components'
import { useField } from 'formik'
import { TextLight } from './Styles/TextStyles'

interface InputProps {
  value: string
  label: string
  type: string
  name: string
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

interface MainInputProps {
  error: boolean
}

const Input: React.FC<InputProps> = props => {
  const { value, label, name, type, onBlur, onChange } = props
  const [field, meta] = useField<{}>(props)
  const errorText = meta.error && meta.touched ? meta.error : ''
  return (
    <Wrapper>
      <Label>{label}</Label>
      <MainInput
        error={!!errorText}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        required
        type={type}
        value={value}
      />
      {errorText && <Error>{errorText}</Error>}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  gap: 0.4em;
`

const Label = styled(TextLight)``

const MainInput = styled.input<MainInputProps>`
  background-color: ${({ error }) =>
    error ? 'rgba(255, 145, 145, 0.3)' : 'rgba(255, 255, 255, 0.3)'};
  border-radius: 5px;
  box-shadow: ${({ error }) =>
    error && 'rgba(235, 12, 12, 0.3) 0px 10px 40px, rgba(227, 32, 32, 1) 0px 0px 0px 1px inset'};
  color: white;
  outline: none;
  padding: 0.5em 0.6em;
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
  width: 100%;

  &:focus {
    background-color: rgba(0, 0, 0, 0.3);
    box-shadow: ${({ error }) =>
      !error && 'rgba(12, 235, 235, 0.3) 0px 10px 40px, rgb(32, 227, 178) 0px 0px 0px 1px inset'};
  }
`

const Error = styled(TextLight)`
  font-size: 10px;
  text-transform: capitalize;
`

export default Input
