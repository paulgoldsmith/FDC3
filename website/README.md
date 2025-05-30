# FDC3 website readme

The FDC3 website is not an integrated part of the FDC3 mono-repo (i.e. its not in `workspaces` element of the main repo's package.json) as it is built separately by netlify. Hence, to build and run the website locally run:

```bash
cd website
npm install
npm run build
```

Please note that this will *also* build the mono-repo projects via the `prebuild` and `parent-build` scripts as the modules are needed to build UIs (fdc3-workbench and fdc3-reference-ui) hosted within the site.

## Releasing new versions of the Standard

To create a new version of the website, a number of NPM scripts need to be run that will create the version and update certain content within it (as automatically as possible). There are then a number of additional manual steps to run.

1. Enter the website directory and make sure the site has been built:

    ```bash
    cd website
    npm install
    npm run build
    ```

2. Then run the versioning script - this should work cross-platform, but can be brittle...
    - edit *website/package.json* and replace the version number in the `version` script to the version number you wish to create:
        `version": "cross-env-shell VERSION=2.1 ...`
    - Run it:

        ```bash
        npm run version
        ```

    - Check the reported version number is as expected and that the scripts ran without errors.

3. Check that the version script has done what it needs to:
    - The new website version should exist in *website/versioned_docs*
        - Links to schema files should have been updated to the versioned links, e.g. check *website/versioned_docs/version-2.1/context/ref/Context.md* has a link like <https://fdc3.finos.org/schemas/2.1/context/context.schema.json> (where '2.1' would be 'next' in the pre-draft)
        - The overview docs (often called spec.md) should have had '(next)' in their titles replaced with the version, e.g. '(2.1)', e.g. check *website/versioned_docs/version-2.1/api/spec.md*
    - A new set of schemas should exist in *website/static/schemas*
        - Check all schema files/folders got copied, including *api/*, *context/*, *bridging/*, *bridgingAsyncAPI/* and the *appd* files.
        - Check that their `$id` fields were updated to match their new URLs, e.g. *website/static/schemas/2.1/context/context.schema.json* should have an `$id` that looks like: `"$id": "https://fdc3.finos.org/schemas/2.1/context/context.schema.json"` (where '2.1' would be 'next' in the pre-draft)
        - Check that the appD schema's `version` field has been updated, i.e. *website/static/schemas/2.1/appd.schema.json* should have `"version": "2.1",` (where '2.1' would be 'next' in the pre-draft)

4. Make a number of additional manual changes:
    - Edit the titles of *website/versioned_docs/version-VERSION/fdc3-intro.md* and *website/versioned_docs/version-VERSION/fdc3-standard.md* to remove '(pre-draft')
    - Edit the titles of *docs/fdc3-intro.md* and *docs/fdc3-standard.md* to use the next planned version number
    - Edit the last Standard version's abstract to update its status and dates, e.g. *website/versioned_docs/version-2.0/fdc3-standard.md*
    - Edit the new Standard version's abstract to update its status and dates, e.g. *website/versioned_docs/version-2.1/fdc3-standard.md*

5. Edit CHANGELOG.md to mark the unreleased changes as the new version and create a new unreleased section for the next version.
    - Note that the title of the release section usually includes a compare link for the previous version. These are based on tags - the tag needed will not exist yet, but is created in a later step. It should be fine to set it to what the tag name will be.

6. If creating a new NPM module version at the same time, then
    - See instructions in the the README.md at the root of the repo

7. Test your changes locally by running the site:

    ```bash
    cd website
    npm run build
    npm run start
    ```

    Check the output of build for broken links in markdown files and correct them. Please note that links to files in the /website/static dir should be prefixed with "pathname://" to exempt them from SPA routing (they will be treated like external links and opened in a new window)

8. Create a PR and send out details for other maintainers to review and test.

9. Merge the PR - website and NPM module will be deployed automatically.

10. Goto <https://github.com/finos/FDC3/releases> and create a new release and tag for the new version.
    - Copy the change log into the release description.
