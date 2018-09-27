import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = props => (
    <div className="header-wrapper">
      <ImageThumbnail />
      <div className="header-title-and-content-wrapper">
        <HeaderTitle />
        <HeaderContent />
      </div>
    </div>
  );

export default HeaderContainer;