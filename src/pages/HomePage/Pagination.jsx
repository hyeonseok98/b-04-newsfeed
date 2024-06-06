import styled from "styled-components";

// 페이지 버튼 렌더링 이벤트 처리 //

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageButtons = () => {
    const buttons = [];

    buttons.push(
      <button key={1} onClick={() => onPageChange(1)} className={currentPage === 1 ? "active" : ""}>
        <span></span>
      </button>,
    );

    if (totalPages <= 5) {
      for (let i = 2; i < totalPages; i++) {
        buttons.push(
          <button key={i} onClick={() => onPageChange(i)} className={currentPage === i ? "active" : ""}>
            <span></span>
          </button>,
        );
      }
    } else {
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      if (currentPage <= 2) {
        startPage = 2;
        endPage = 4;
      } else if (currentPage >= totalPages - 1) {
        startPage = totalPages - 3;
        endPage = totalPages - 1;
      }

      for (let i = startPage; i <= endPage; i++) {
        buttons.push(
          <button key={i} onClick={() => onPageChange(i)} className={currentPage === i ? "active" : ""}>
            <span></span>
          </button>,
        );
      }

      if (endPage < totalPages - 1) {
        buttons.push(<span key="ellipsis">...</span>);
      }
    }

    if (totalPages > 1) {
      buttons.push(
        <button
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          className={currentPage === totalPages ? "active" : ""}
        >
          <span></span>
        </button>,
      );
    }

    return buttons;
  };

  return (
    <StPagination>
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        &lt;
      </button>
      {renderPageButtons()}
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        &gt;
      </button>
    </StPagination>
  );
};

export default Pagination;

const StPagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  button {
    margin: 0 5px;
    padding: 5px;
    border: none;
    border-radius: 50%;
    background-color: var(--secondary-color);
    color: var(--white);
    cursor: pointer;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:disabled {
      background-color: var(--color-black-40);
      cursor: not-allowed;
    }

    &.active {
      background-color: var(--white);
    }

    &:hover:not(:disabled):not(.active) {
      background-color: var(--white);
    }

    span {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: transparent;
    }
  }

  span {
    margin: 0 5px;
    padding: 5px;
    color: var(--secondary-color);
    display: flex;
    align-items: center;
  }
`;
