import { useEffect, useState } from "react";

export const useFetchContent = (query: any) => {
  const [data, setData] = <any>useState(null);

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/d19gnldgydmc`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: "Bearer nRQq1psgRl49LIrxOvsKbyQ_onA_T712zBNuju-hzs8",
        },
        // send the GraphQL query
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        setData(data);
      });
  }, [query]);

  return data;
};
