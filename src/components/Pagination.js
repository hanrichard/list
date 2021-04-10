import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import PropTypes from 'prop-types';
import React from 'react';

export default function Pagination({
  onClickPagination,
  currentPage,
  totalPaginatedPages,
}) {
  const handlePreviousClick = () => {
    if (currentPage > 1) {
      onClickPagination(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPaginatedPages) {
      onClickPagination(currentPage + 1);
    }
  };
  return (
    <div data-testid="pagination">
      <Grid container justify="center">
        <Grid item xs>
          <ArrowLeftIcon
            data-testid="arrow-left-pagination"
            onClick={
              () => handlePreviousClick()
            } />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h4">
            Page
            {' '}
            {currentPage}
            /
            {totalPaginatedPages}
          </Typography>
        </Grid>
        <Grid item xs>
          <ArrowRightIcon
            data-testid="arrow-right-pagination"
            onClick={
              () => handleNextClick()
            } />
        </Grid>
      </Grid>
    </div>
  );
}

Pagination.defaultProps = {
  onClickPagination: () => {},
  currentPage: 0,
  totalPaginatedPages: 0,
};

Pagination.propTypes = {
  onClickPagination: PropTypes.func,
  currentPage: PropTypes.number,
  totalPaginatedPages: PropTypes.number,
};
