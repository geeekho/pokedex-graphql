'use client';

import React from 'react';
import { CardContent } from '../ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../ui/form';
import { useForm } from 'react-hook-form';
import { searchSchema, SearchSchema } from '@/schema/searchSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { redirect as nextredirect } from 'next/navigation';
import LoadingState from '../ui/loadingState';

interface SearchFormProps {
  redirect?: (url: string) => void;
}

const SearchForm = ({ redirect }: SearchFormProps) => {
  const form = useForm<SearchSchema>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      name: '',
    },
    mode: 'all',
  });
  const handleSubmit = async (data: SearchSchema) => {
    if (redirect) redirect(`/${data.name.toLowerCase()}`);
    else nextredirect(`/${data.name.toLowerCase()}`);
  };
  const getRandomPokemon = () => {
    const randomId = Math.floor(Math.random() * 1008) + 1;
    if (redirect) redirect(`/${randomId}`);
    else nextredirect(`/${randomId}`);
  };
  return (
    <CardContent>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col items-center justify-center space-y-4"
          aria-label="form"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="max-w-xs">
                <FormControl>
                  <Input
                    type="text"
                    className="bg-muted"
                    placeholder="Diglett"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center flex-wrap justify-between gap-4 sm:gap-6">
            <Button
              variant={'default'}
              type="submit"
              disabled={!form.formState.isValid}
              className="hover:bg-primary"
            >
              {form.formState.isSubmitting ? <LoadingState /> : <>Submit</>}
            </Button>
            <Button
              type="button"
              onClick={getRandomPokemon}
              className="hover:bg-primary"
            >
              Random
            </Button>
          </div>
        </form>
      </Form>
    </CardContent>
  );
};

export default SearchForm;
