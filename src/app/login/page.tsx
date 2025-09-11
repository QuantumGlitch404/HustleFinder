'use client';

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import AnimatedDiv from '@/components/animations/AnimatedDiv';

const signInSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(1, { message: 'Password is required' }),
});

const signUpSchema = z.object({
  displayName: z.string().min(3, { message: 'Display name must be at least 3 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
});

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C39.904,36.218,44,30.686,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
  </svg>
);


export default function LoginPage() {
  const { user, signInWithGoogle, signUpWithEmail, signInWithEmail } = useAuth();
  const router = useRouter();
  const [isSigningIn, setIsSigningIn] = React.useState(false);
  const [isSigningUp, setIsSigningUp] = React.useState(false);

  const { register: registerSignIn, handleSubmit: handleSignInSubmit, formState: { errors: signInErrors } } = useForm({
    resolver: zodResolver(signInSchema),
  });

  const { register: registerSignUp, handleSubmit: handleSignUpSubmit, formState: { errors: signUpErrors } } = useForm({
    resolver: zodResolver(signUpSchema),
  });
  
  useEffect(() => {
    if (user) {
      router.push('/profile');
    }
  }, [user, router]);

  const onSignIn = async (data: z.infer<typeof signInSchema>) => {
    setIsSigningIn(true);
    try {
      await signInWithEmail(data.email, data.password);
      // Redirect is handled by useEffect
    } catch (error) {
      // Toast is handled in context
    } finally {
      setIsSigningIn(false);
    }
  };

  const onSignUp = async (data: z.infer<typeof signUpSchema>) => {
    setIsSigningUp(true);
    try {
      await signUpWithEmail(data.email, data.password, data.displayName);
      // Redirect is handled by useEffect
    } catch (error) {
      // Toast is handled in context
    } finally {
      setIsSigningUp(false);
    }
  };

  return (
    <AnimatedDiv animationClasses="fade-in slide-in-from-bottom-8" durationClass="duration-500" className="max-w-md mx-auto">
        <Card>
            <CardHeader className="text-center">
                <CardTitle className="text-2xl">Join Hustle Finder</CardTitle>
                <CardDescription>
                Sign in to save your favorite hustles and access them anywhere.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="signin" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="signin">Sign In</TabsTrigger>
                    <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    </TabsList>
                    <TabsContent value="signin">
                    <form onSubmit={handleSignInSubmit(onSignIn)} className="space-y-4 pt-4">
                        <div className="space-y-1">
                        <Label htmlFor="signin-email">Email</Label>
                        <Input id="signin-email" type="email" {...registerSignIn('email')} />
                        {signInErrors.email && <p className="text-xs text-destructive">{signInErrors.email.message}</p>}
                        </div>
                        <div className="space-y-1">
                        <Label htmlFor="signin-password">Password</Label>
                        <Input id="signin-password" type="password" {...registerSignIn('password')} />
                        {signInErrors.password && <p className="text-xs text-destructive">{signInErrors.password.message}</p>}
                        </div>
                        <Button type="submit" className="w-full" disabled={isSigningIn}>
                        {isSigningIn && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Sign In
                        </Button>
                    </form>
                    </TabsContent>
                    <TabsContent value="signup">
                    <form onSubmit={handleSignUpSubmit(onSignUp)} className="space-y-4 pt-4">
                        <div className="space-y-1">
                        <Label htmlFor="signup-displayname">Display Name</Label>
                        <Input id="signup-displayname" {...registerSignUp('displayName')} />
                        {signUpErrors.displayName && <p className="text-xs text-destructive">{signUpErrors.displayName.message}</p>}
                        </div>
                        <div className="space-y-1">
                        <Label htmlFor="signup-email">Email</Label>
                        <Input id="signup-email" type="email" {...registerSignUp('email')} />
                        {signUpErrors.email && <p className="text-xs text-destructive">{signUpErrors.email.message}</p>}
                        </div>
                        <div className="space-y-1">
                        <Label htmlFor="signup-password">Password</Label>
                        <Input id="signup-password" type="password" {...registerSignUp('password')} />
                        {signUpErrors.password && <p className="text-xs text-destructive">{signUpErrors.password.message}</p>}
                        </div>
                        <Button type="submit" className="w-full" disabled={isSigningUp}>
                        {isSigningUp && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Create Account
                        </Button>
                    </form>
                    </TabsContent>
                </Tabs>
                <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                    </div>
                </div>
                <Button variant="outline" className="w-full" onClick={signInWithGoogle}>
                    <GoogleIcon className="mr-2 h-5 w-5" />
                    Sign in with Google
                </Button>
            </CardContent>
        </Card>
    </AnimatedDiv>
  );
}
