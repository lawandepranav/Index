/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 * @format
 * @oncall react_native
 */

import type { Experiments } from "../types/Experiments";
/**
 * Get the DevTools frontend URL to debug a given React Native CDP target.
 */
declare function getDevToolsFrontendUrl(
  experiments: Experiments,
  webSocketDebuggerUrl: string,
  devServerUrl: string,
  options?: Readonly<{
    relative?: boolean;
    launchId?: string;
    /** Whether to use the modern `rn_fusebox.html` entry point. */
    useFuseboxEntryPoint?: boolean;
  }>
): string;
export default getDevToolsFrontendUrl;