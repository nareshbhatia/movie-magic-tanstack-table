'use client';

import { FavoriteToggle } from './FavoriteToggle';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import type { Movie } from '@/models';
import type { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<Movie>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    cell: ({ row }) => <div>{row.getValue('id')}</div>,
  },
  {
    accessorKey: 'name',
    header: 'Movie',
    cell: ({ row }) => <div>{row.getValue('name')}</div>,
  },
  {
    accessorKey: 'certification',
    header: ({ column }) => (
      <Button
        onClick={() => {
          column.toggleSorting(column.getIsSorted() === 'asc');
        }}
        variant="ghost"
      >
        Cert
        <Icons.arrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {row.getValue('certification')}
      </div>
    ),
  },
  {
    accessorKey: 'rating',
    header: ({ column }) => (
      <Button
        onClick={() => {
          column.toggleSorting(column.getIsSorted() === 'asc');
        }}
        variant="ghost"
      >
        Rating
        <Icons.arrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const rating: number = row.getValue('rating');
      return <div className="text-center font-medium">{rating.toFixed(1)}</div>;
    },
  },
  {
    accessorKey: 'favorite',
    header: '',
    cell: ({ row }) => (
      <FavoriteToggle
        checked={row.getValue('favorite')}
        movieId={row.getValue('id')}
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
];
