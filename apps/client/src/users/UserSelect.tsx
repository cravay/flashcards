import { UserDto } from '@flashcards/shared';
import { Avatar, Group, Select, Text } from '@mantine/core';
import { IconUser } from '@tabler/icons';
import { ComponentProps, ComponentPropsWithoutRef, forwardRef } from 'react';

import { useGetUsersQuery } from '../app/apiSlice';

type ItemProps = ComponentPropsWithoutRef<'div'> &
  Pick<UserDto, 'avatar' | 'eMail'> & { label: string; value: string };

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ label, avatar, eMail, ...others }: ItemProps, ref): JSX.Element => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar src={avatar} />

        <div>
          <Text size="sm">{label}</Text>
          <Text size="xs" color="dimmed">
            {eMail}
          </Text>
        </div>
      </Group>
    </div>
  )
);

type UserSelectProps = Partial<
  Omit<ComponentProps<typeof Select>, 'onChange'>
> & { onChange: (userId: number | null) => void };

export function UserSelect(props: UserSelectProps): JSX.Element {
  const { data: users = [] } = useGetUsersQuery();

  const userItems: ItemProps[] = users.map(({ id, name, avatar, eMail }) => ({
    value: String(id),
    label: name,
    avatar,
    eMail,
  }));

  const onChange = (value: string | null): void =>
    props.onChange(value !== null ? Number(value) : null);

  return (
    <Select
      icon={<IconUser size={14} />}
      label="Select User"
      itemComponent={SelectItem}
      data={userItems}
      searchable
      maxDropdownHeight={400}
      nothingFound="No users found"
      filter={(value, item) =>
        item.label?.toLowerCase().includes(value.toLowerCase().trim()) ||
        item['name']?.toLowerCase().includes(value.toLowerCase().trim())
      }
      {...props}
      value={String(props.value)}
      onChange={onChange}
    />
  );
}
