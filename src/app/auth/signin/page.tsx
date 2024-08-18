'use client'
import Link from 'next/link'
import { useForm, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const SignInSchema = z.object({
    email: z.string().email(),
    password: z.string(),
})

export default function Page() {
    const form = useForm<z.infer<typeof SignInSchema>>({
        resolver: zodResolver(SignInSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const handleFormSubmit: SubmitHandler<z.infer<typeof SignInSchema>> = (data) => {
        console.log(data)
    }

    return (
        <>
            <div className="mb-8 px-1.5">
                <h1 className="text-center text-xl tracking-tight font-bold sm:text-left">
                    Log in account
                </h1>
                <p className="text-center text-base font-normal sm:text-left">
                    Dont have an account?{' '}
                    <Link
                        className="text-blue-600 underline underline-offset-3 hover:text-blue-800"
                        href="/auth/signup"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
            <div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleFormSubmit)}>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="rounded-lg p-1.5 focus-within:bg-neutral-200/60">
                                    <FormItem className="border space-y-0 px-3 py-2 rounded-lg bg-white focus-within:border-neutral-800">
                                        <FormLabel htmlFor="email" className="text-neutral-400">
                                            Email
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                className="border-none outline-none p-0 h-6 focus-visible:ring-none focus-visible:ring-0"
                                                id="email"
                                                type="email"
                                                placeholder="your@email.com"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem className="rounded-lg p-1.5 focus-within:bg-neutral-200/60">
                                    <FormItem className="border space-y-0 px-3 py-2 rounded-lg bg-white focus-within:border-neutral-800">
                                        <FormLabel htmlFor="password" className="text-neutral-400">
                                            Password
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                className="border-none outline-none p-0 h-6 focus-visible:ring-none focus-visible:ring-0"
                                                id="password"
                                                type="password"
                                                placeholder="••••••••••••"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                </FormItem>
                            )}
                        />
                        <FormItem className="mt-2 rounded-lg p-1.5 focus-within:bg-neutral-200/80 md:mt-5">
                            <Button
                                type="submit"
                                variant={'default'}
                                className="w-full rounded-lg focus-visible:outline-none focus-visible:ring-0 md:h-11"
                            >
                                Continue
                            </Button>
                        </FormItem>
                    </form>
                </Form>
            </div>
        </>
    )
}
