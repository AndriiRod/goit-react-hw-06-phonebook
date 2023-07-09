import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

import { getContacts } from 'redux/contacts/slice';
import { add } from 'redux/contacts/slice';

import schema from '../../validation/schema';

import {
  Form,
  SubTitle,
  Label,
  Input,
  FormBtn,
  ErrorMessage,
} from './AddContactForm.styled';

const AddContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      number: '',
    },
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });
  const inputNameId = nanoid(6);
  const inputNumberId = nanoid(6);

  const handleSubmitForm = data => {
    const { name } = data;

    const matches = contacts.find(item => item.name === name);
    if (matches) {
      toast.info(
        `${name.charAt(0).toUpperCase() + name.slice(1)} is already in contacts`
      );
      return;
    }
    dispatch(add(data));
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
      <SubTitle>Add</SubTitle>
      <Label htmlFor={inputNameId} error={errors.name}>
        Name
      </Label>
      <Input
        id={inputNameId}
        type="text"
        {...register('name', { required: true })}
        error={errors.name}
      />
      {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

      <Label htmlFor={inputNumberId} error={errors.number}>
        Number
      </Label>
      <Input
        id={inputNumberId}
        type="tel"
        {...register('number', { required: true })}
        error={errors.number}
      />
      {errors.number && <ErrorMessage>{errors.number.message}</ErrorMessage>}
      <FormBtn type="submit">Add contact</FormBtn>
    </Form>
  );
};

export default AddContactForm;
