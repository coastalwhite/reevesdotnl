import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

const BuildDate = () => {
    const dateTime = new Date(useStaticQuery(graphql`
    {
      site {
        buildTime
      }
    }
    `).site.buildTime).toLocaleString();
    return <div>
        {dateTime}
    </div>
};

export default BuildDate;