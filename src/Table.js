import React from 'react';
import { Icon } from 'react-icons-kit';
import { volumeUp } from 'react-icons-kit/fa/volumeUp';
import { ic_close } from 'react-icons-kit/md/ic_close';

export default function Table() {
  return (
    <div>
      <div className="table-header">
        <h4 style={{ padding: '10px', margin: '0px' }}>Option Flow</h4>
        <span className="cross">
          <span
            style={{ color: '#272494', marginRight: '10px' }}
            className="icon-sidebar"
          >
            <Icon icon={volumeUp} size={24} />
          </span>
          <span
            style={{ color: '#969AA3', marginRight: '10px' }}
            className="icon-sidebar"
          >
            <Icon icon={ic_close} size={24} />
          </span>
        </span>
        <table>
          <tr>
            <th>Time</th>
            <th>DIR</th>
            <th>TICKER</th>
            <th>EXPIRY</th>
            <th>STRIKE</th>
            <th>C/P</th>
            <th>SPOT</th>
            <th>DETAILS</th>
            <th>TYPE</th>
            <th>PREM</th>
            <th></th>
          </tr>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
            <tr className="table-header-list">
              <td>Time</td>
              <td>DIR</td>
              <td>TICKER</td>
              <td>EXPIRY</td>
              <td>STRIKE</td>
              <td>C/P</td>
              <td>SPOT</td>
              <td>DETAILS</td>
              <td>TYPE</td>
              <td>PREM</td>
              <td>...</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
