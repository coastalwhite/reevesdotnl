import * as React from "react";

import { graphql, StaticQuery } from "gatsby";

const fetchQuery = graphql`
        query MarkdownFiles {
          allMarkdownRemark {
            edges {
              node {
                html
                frontmatter {
                  title,
                  image_alt,
                  image_path,
                  readmore_uri,
                }
                fileAbsolutePath
              }
            }
          }
        }
    `;

type QueryReturnType = {
  allMarkdownRemark: {
    edges: {
      node: {
        html: string;
        frontmatter: any;
        fileAbsolutePath: string;
      };
    }[];
  };
};

export function LoadWithMD<FrontmatterProps>(
  filePath: string,
  render: (html: string, fm: FrontmatterProps) => React.ReactNode,
): JSX.Element {
  return (<StaticQuery
    query={fetchQuery}
    render={(data: QueryReturnType) => {
      const nodes = data.allMarkdownRemark.edges.map((x) => x.node);
      const pattern = new RegExp(filePath, "g");

      const fileInfo = nodes.find(({ fileAbsolutePath }) =>
        fileAbsolutePath.match(pattern)
      );

      const { html, frontmatter } = fileInfo as {
        html: string;
        frontmatter: FrontmatterProps;
        fileAbsolutePath: string;
      };

      return render(html, frontmatter);
    }}
  />);
}
