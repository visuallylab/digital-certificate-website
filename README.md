# Digital certificate website

## 🚀 Quick start

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

## 🧐 What's inside?

1. **Generate the document by markdown**

   Open `gatsby-node.js`, uncomment the codes below `DOCUMENT FEATURE`, and create markdowns in `src/docs`

2. **The Landing page**

   Edit the Landing page in `src/pages/index.tsx`

3. **Deployment**

   Run command to deploy to gh-pages

   ```shell
   yarn deploy
   ```

4. **Typing generate**

   Run developing server and run codegen command, the typing will be at `graphqlTypes.d.ts`.

   ```shell
   gatsby develop
   yarn codegen:typing
   ```
