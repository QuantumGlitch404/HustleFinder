
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth, UserProfile } from '@/context/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Camera, Loader2, User as UserIcon } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const profileSchema = z.object({
  displayName: z.string().min(3, { message: "Name must be at least 3 characters long." }).max(50),
  age: z.coerce.number().min(13, "You must be at least 13 years old.").max(120).optional().or(z.literal('')),
  gender: z.enum(['male', 'female', 'other', 'prefer-not-to-say']).optional(),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

export default function ProfilePage() {
  const { user, userProfile, loading, updateUserProfile } = useAuth();
  const router = useRouter();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      displayName: '',
      age: '',
      gender: 'prefer-not-to-say',
    },
  });

  useEffect(() => {
    if (!loading && !user) {
      router.push('/');
    }
    if (userProfile) {
      reset({
        displayName: userProfile.displayName || '',
        age: userProfile.age || '',
        gender: userProfile.gender || 'prefer-not-to-say',
      });
    }
  }, [user, userProfile, loading, router, reset]);

  const onSubmit = async (data: ProfileFormValues) => {
    const updateData: Partial<UserProfile> = {
      displayName: data.displayName,
      age: data.age ? Number(data.age) : undefined,
      gender: data.gender,
    };
    await updateUserProfile(updateData);
  };

  if (loading || !userProfile) {
    return <div className="flex justify-center items-center h-64"><Loader2 className="h-8 w-8 animate-spin" /></div>;
  }

  return (
    <div className="container mx-auto py-8 max-w-2xl h-full flex flex-col justify-center">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Your Profile</CardTitle>
          <CardDescription>Manage your personal information.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex items-center space-x-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src={userProfile.photoURL || undefined} alt={userProfile.displayName || 'User'} />
                <AvatarFallback>
                    <UserIcon className="h-12 w-12" />
                </AvatarFallback>
              </Avatar>
              <Button type="button" variant="outline">
                <Camera className="mr-2 h-4 w-4" />
                Change Photo (soon)
              </Button>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="displayName">Display Name</Label>
              <Controller
                name="displayName"
                control={control}
                render={({ field }) => <Input id="displayName" {...field} />}
              />
              {errors.displayName && <p className="text-sm text-destructive">{errors.displayName.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={userProfile.email || ''} disabled />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Controller
                  name="age"
                  control={control}
                  render={({ field }) => <Input id="age" type="number" {...field} />}
                />
                 {errors.age && <p className="text-sm text-destructive">{errors.age.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Controller
                  name="gender"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                    </Select>
                  )}
                />
              </div>
            </div>

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Save Changes
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
