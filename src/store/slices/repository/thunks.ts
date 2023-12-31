import { toast } from "react-hot-toast";
import { ghApi } from "../../../api/ghApi";
import { AppDispatch } from "../../store";
import { setRepositories } from "./repositorySlice";

export const getRepositories = (username: string) => {
  return async (dispatch: AppDispatch) => {
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
    } catch {
      toast.error("Something went wrong!");
    }
  };
};
