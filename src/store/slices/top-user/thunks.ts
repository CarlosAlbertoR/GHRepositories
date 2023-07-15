import { ghApi } from "../../../api/ghApi";
import { AppDispatch } from "../../store";
import { setTopUsers } from "./topUserSlice";

export const getTopUsers = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const query = `
        query {
          search(query: "type:user", type: USER, first: 100) {
            edges {
              node {
                ... on User {
                  login
                  name
                  avatarUrl
                  repositories {
                    totalCount
                  }
                }
              }
            }
          }
        }
      `;

      const response = await ghApi.post("", {
        query: query,
      });

      const users = response.data.data.search.edges.map((edge: any) => {
        const user = edge.node;
        return {
          name: user.name,
          avatarUrl: user.avatarUrl,
          username: user.login,
          repositoryCount: user.repositories.totalCount,
        };
      });

      dispatch(setTopUsers({ topUsers: users }));
    } catch (error) {
      console.error("Error al obtener los usuarios top:", error);
    }
  };
};

export const getUsersByUsername = (username: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const query = `
        query GetUsersByUsername($username: String!) {
          search(query: $username, type: USER, first: 100) {
            edges {
              node {
                ... on User {
                  login
                  name
                  avatarUrl
                  repositories {
                    totalCount
                  }
                }
              }
            }
          }
        }
      `;

      const variables = {
        username: username,
      };

      const response = await ghApi.post("", {
        query: query,
        variables: variables,
      });

      const users = response.data.data.search.edges.map((edge: any) => {
        const user = edge.node;
        return {
          name: user.name,
          avatarUrl: user.avatarUrl,
          username: user.login,
          repositoryCount: user.repositories.totalCount,
        };
      });

      dispatch(setTopUsers({ topUsers: users }));
    } catch (error) {
      console.error("Error al obtener los usuarios por username:", error);
    }
  };
};
