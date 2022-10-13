import { memo } from 'react';
import { Box } from 'src/components/common/Box';
import { Text } from 'src/components/common/Text';
import { useTodos } from 'src/services';

export const TodoPage = memo(function TodoPageMemoized(): JSX.Element {
  const { data, refetch, isRefetching, isFetched } = useTodos();

  return (
    <Box alignItems='flex-start' flexDirection='column' gap='12px'>
      <Text>TodoPage</Text>

      <button onClick={() => refetch()} disabled={isRefetching || isFetched}>
        Fetch data
      </button>

      {isRefetching && <Text>Loading...</Text>}

      {isFetched &&
        data?.map((item) => (
          <Box key={item.id} gap='12px'>
            <Text>#{item.id}&nbsp;</Text>

            <Text>({item.completed ? '+' : '-'})&nbsp;</Text>

            <Text>{item.title}</Text>
          </Box>
        ))}
    </Box>
  );
});
