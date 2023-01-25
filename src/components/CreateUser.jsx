import { TextInput, Textarea, SimpleGrid, Group, Title, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useNavigate } from 'react-router-dom';

export default function CreateUser() {
  const navigate = useNavigate();
  const PostUser = (UserData) => {
    const {name, email, avatar} = UserData;
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({"name": name, "email":email, "avatar": avatar})
    };
    fetch('https://63c57732f80fabd877e93ed1.mockapi.io/api/v1/users', requestOptions)
        .then(res => console.log(res.json()))
        .then(()=>navigate('/'))
        .catch(err => alert(err));
  }

  const form = useForm({
    initialValues: {
      name:'',
      email: '',
      avatar: '',
    },
    validate: {
      email: (value) => !/^\S+@\S+$/.test(value)
    },
  });

  return (
    <form onSubmit={form.onSubmit(() => PostUser(form.values) )}>
      <Title
        order={2}
        size="h1"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
        weight={900}
        align="center"
      >
        User Creation Form
      </Title>

      <TextInput
          label="Name"
          placeholder="Name"
          name="name"
          variant="filled"
          {...form.getInputProps('name')}
        />

        <TextInput
          label="Email"
          placeholder="Your email"
          mt="md"
          name="email"
          variant="filled"
          {...form.getInputProps('email')}
        />
        
      <TextInput
        label="Avatar"
        placeholder="Avatar"
        mt="md"
        name="avatar"
        variant="filled"
        {...form.getInputProps('avatar')}
      />

      <Group position="center" mt="xl">
        <Button type="submit" size="md">
          Submit
        </Button>
      </Group>
    </form>
  );
}