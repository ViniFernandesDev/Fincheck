import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
    name: z.string()
    .min(1, { message: "Nome é obrigatório" }),
    email: z.string()
    .min(1, { message: "Email é obrigatório" })
    .email('Informe um e-mail válido'),
    password: z.string()
    .min(8, { message: "A senha deve conter pelo menos 8 digitos" }),
})

type FormData = z.infer<typeof schema>

export function useRegisterController() {
    const { 
        register,
        handleSubmit: hookFormHandleSubmit,
        formState: { errors },
     } = useForm<FormData>({
        resolver: zodResolver(schema)
     });

    const handleSubmit = hookFormHandleSubmit((data) => {
        // chama a api'
    });


    return { handleSubmit, register, errors };
}