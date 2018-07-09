import React, { Component } from 'react';
import {
  withStyles, Table, TableBody,
  TableCell, TableHead, TablePagination,
  TableRow, TableSortLabel, Toolbar, Typography,
  Paper, IconButton, Tooltip,
  DeleteIcon, FilterListIcon
} from '@material-ui/core';

const columnHeader = [
  { id: 'profile', numeric: false, disablePadding: true, label: 'Profile' },
  { id: '_id', numeric: true, disablePadding: true, label: 'Profile ID' },
  { id: 'userEmail', numeric: false, disablePadding: false, label: 'User Email' },
  { id: 'ipAddress', numeric: false, disablePadding: true, label: 'IP Address' },
  { id: 'createdAt', numeric: true, disablePadding: false, label: 'Profile Created' },
  { id: 'reasons', numeric: false, disablePadding: true, label: 'Reasons Flagged' },
];

class SiteTableHeader extends Component {

  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    function getSorting(order, orderBy) {
      return order === 'desc'
        ? (a, b) => (b[orderBy] < a[orderBy] ? -1 : 1)
        : (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1);
    }

    const { order, orderBy } = this.props;

    return (
        <TableHead>
          <TableRow>
            {columnHeader.map(data => {
              return (
                <TableCell
                  key={data.id}
                  numeric={data.numeric}
                  padding={data.disablePadding ? 'none' : 'default'}
                  sortDirection={orderBy === data.id ? order : false}
                >
                  <Tooltip
                    title="Sort"
                    placement={data.numeric ? 'bottom-end' : 'bottom-start'}
                    enterDelay={300}
                  >
                    <TableSortLabel
                      active={orderBy === data.id}
                      direction={order}
                      onClick={this.createSortHandler(data.id)}
                    >
                      {data.label}
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
              );
            }, this)}
          </TableRow>
        </TableHead>
    );
  }
}


export default SiteTableHeader;