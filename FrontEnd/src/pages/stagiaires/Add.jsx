import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Button, Stack, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

const schema = yup.object().shape({
  nom: yup.string().required('Le nom est obligatoire'),
  prenom: yup.string().required('Le prénom est obligatoire'),
  email: yup.string().email('Email invalide').required('Email obligatoire'),
  periode: yup.object({
    debut: yup.date().required('Date de début requise'),
    fin: yup.date().required('Date de fin requise'),
  }),
});

export default function AddStagiaire() {
  const { register, handleSubmit, formState: { errors }, control } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('Data submitted:', data);
    // Ici, on gérera l'envoi au backend plus tard
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h5" gutterBottom>Nouveau Stagiaire</Typography>
      
      <Stack spacing={3} sx={{ maxWidth: 600 }}>
        <TextField
          label="Nom"
          {...register('nom')}
          error={!!errors.nom}
          helperText={errors.nom?.message}
        />
        
        <TextField
          label="Prénom"
          {...register('prenom')}
          error={!!errors.prenom}
          helperText={errors.prenom?.message}
        />
        
        <TextField
          label="Email"
          type="email"
          {...register('email')}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        
        <DatePicker
          label="Date de début"
          {...register('periode.debut')}
          slotProps={{ textField: { error: !!errors.periode?.debut } }}
        />
        
        <DatePicker
          label="Date de fin"
          {...register('periode.fin')}
          slotProps={{ textField: { error: !!errors.periode?.fin } }}
        />
        
        <Button type="submit" variant="contained" size="large">
          Enregistrer
        </Button>
      </Stack>
    </form>
  );
}