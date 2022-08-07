// Copyright (C) 2022  Shanhu Tech Inc.
//
// This program is free software: you can redistribute it and/or modify it
// under the terms of the GNU Affero General Public License as published by the
// Free Software Foundation, either version 3 of the License, or (at your
// option) any later version.
//
// This program is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
// FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License
// for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

import * as React from 'react' // for tsx

import * as page from '@shanhuio/htmlgen/dist/page'
import go from '@shanhuio/htmlgen/dist/go'

export function make() {
    let body = <React.Fragment>
        <div id="main"/>
        <svg height="0" width="0"><text id="measure" /></svg>
        <script>var pageData = {go('.PageData')};</script>
    </React.Fragment>

    let prop = {
        title: 'dagvis by shanhu.io',
        css: '/style.css',
    }
    let p = new page.Page('dagview', prop)
    p.body = body
    p.scripts = [
        '/jslib/jquery.js',
        '/jslib/react.js',
        '/jslib/react-dom.js',
        '/js/dagview.js',
    ]

    return p
}
