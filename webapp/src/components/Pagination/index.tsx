import { MovieContext, TMovieContext } from '@contexts/MovieContext/context';
import { useContext, useEffect, useMemo, useState } from 'react';
import * as S from './styles';

export const Pagination: React.FC = () => {
  const { pages, actualPage, newPage, updateMovies } = useContext(
    MovieContext,
  ) as TMovieContext;

  const [disabled, setDisabled] = useState({
    previous: true,
    next: false,
  });

  const pagesButton = useMemo(() => {
    return Array.from({ length: pages }).map((_, index) => index + 1);
  }, [pages]);

  useEffect(() => {
    setDisabled((prev) => ({
      ...prev,
      previous: actualPage <= 1,
      next: actualPage >= pages,
    }));
    window.scrollTo({ top: 0 });
  }, [actualPage, pages]);

  return (
    <S.Container>
      <S.PaginationButton
        disabled={disabled.previous}
        onClick={() => newPage(actualPage - 1)}
      >
        {'<'}
      </S.PaginationButton>
      {pagesButton.map((page) => (
        <S.PaginationButton
          key={page}
          selected={page === actualPage}
          onClick={() => newPage(page)}
        >
          {page}
        </S.PaginationButton>
      ))}
      <S.PaginationButton
        disabled={disabled.next}
        onClick={() => newPage(actualPage + 1)}
      >
        {'>'}
      </S.PaginationButton>
      <S.PaginationButton onClick={updateMovies}>
        Update movies
      </S.PaginationButton>
    </S.Container>
  );
};
