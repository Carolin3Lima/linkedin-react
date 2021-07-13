import React from 'react';
import "./Widgets.css";
import InfoIcon  from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecordIcon/>
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon/>
      </div>
      {newsArticle("Man in China finds son snatched 24 years ago", "Top news - 999 readers")}
      {newsArticle("Internet sheds light on Cuba anger - until it goes dark", "Top news - 766 readers")}
      {newsArticle("Protests as Iraq hospital blaze kills at least 92", "Top news - 789 readers")}
      {newsArticle("Iran unveils dating app to promote marriage", "Interne & tecnology - 675 readers")}
      {newsArticle("Federer and Konta out of Tokyo Olympics", "Sports - 176 readers")}
      {newsArticle("Pet owners warned as giant goldfish threaten lake", "Wild Life- 95 readers")}
    </div>
  )
}

export default Widgets
