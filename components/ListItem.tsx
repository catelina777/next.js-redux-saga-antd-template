import React, { FC } from 'react';
import Link from 'next/link';

import { User } from '../interfaces';

type Props = {
  data: User;
};

const ListItem: FC<Props> = ({ data }: Props) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
);

export default ListItem;
