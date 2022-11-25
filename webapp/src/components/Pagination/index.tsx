import { useEffect, useMemo, useState } from 'react';
import * as S from './styles';

type PaginationProps = {
  pages: number;
  actualPage: number;
};

export const Pagination: React.FC<PaginationProps> = ({
  pages,
  actualPage,
}) => {
  const [disabled, setDisabled] = useState({
    previous: true,
    next: false,
  });
  const pagesButton = useMemo(() => {
    return Array.from({ length: pages }).map((_, index) => index + 1);
  }, [pages]);

  useEffect(() => {
    if (actualPage > 1) {
      setDisabled((prev) => ({ ...prev, previous: false }));
    }
    if (actualPage >= pages) {
      setDisabled((prev) => ({ ...prev, next: true }));
    }
  }, [actualPage, pages]);

  return (
    <S.Container>
      <S.PaginationButton disabled={disabled.previous}>
        {'<'}
      </S.PaginationButton>
      {pagesButton.map((page) => (
        <S.PaginationButton key={page} selected={page === actualPage}>
          {page}
        </S.PaginationButton>
      ))}
      <S.PaginationButton disabled={disabled.next}>{'>'}</S.PaginationButton>
    </S.Container>
  );
};
