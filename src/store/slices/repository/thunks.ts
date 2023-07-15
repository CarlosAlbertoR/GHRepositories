import { ghApi } from "../../../api/ghApi";
import { AppDispatch, RootState } from "../../store";
import { setRepositories } from "./repositorySlice";

export const getRepositories = (username: string) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const query = `
        query($username: String!) {
          user(login: $username) {
            repositories(first: 100) {
              edges {
                node {
                  id
                  name
                  description
                  url
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

      const repositories = response.data.data.user.repositories.edges.map(
        (edge: any) => edge.node
      );

      dispatch(setRepositories({ repositories: repositories }));
    } catch (error) {
      console.error("Error al obtener los repositorios:", error);
    }
  };
};
