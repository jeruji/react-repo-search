import React from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo";

interface IViewer {
  name: string;
  avatarUrl: string;
}

interface IQueryResult {
  viewer: IViewer;
}

const GET_VIEWER = gql`
  {
    viewer {
      name
      avatarUrl
    }
  }
`;

export const Header: React.SFC = () => {
  const { loading, data, error } = useQuery<IQueryResult>(GET_VIEWER);

  return (
    <div>
      {loading && <div className="viewer">Loading...</div>}
      {error && <div className="viewer">{error.toString()}</div>}
      {data && (
          <img
            src={data.viewer.avatarUrl}
            alt="github profile"
            className="avatar"
          />
        ) && <div className="viewer">{data.viewer.name}</div>}

      <h1>Github Search</h1>
    </div>
  );
};
