/**
 * @generated SignedSource<<bee9e32c23c300698b7312fdae765360>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Commander_CommanderBanner$data = {
  readonly cards: ReadonlyArray<{
    readonly imageUrls: ReadonlyArray<string>;
  }>;
  readonly colorId: string;
  readonly name: string;
  readonly " $fragmentType": "Commander_CommanderBanner";
};
export type Commander_CommanderBanner$key = {
  readonly " $data"?: Commander_CommanderBanner$data;
  readonly " $fragmentSpreads": FragmentRefs<"Commander_CommanderBanner">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Commander_CommanderBanner",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "colorId",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Card",
      "kind": "LinkedField",
      "name": "cards",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "imageUrls",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Commander",
  "abstractKey": null
};

(node as any).hash = "035d2141fb0c1222742203e1c28c9e50";

export default node;
