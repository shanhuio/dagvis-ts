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

import * as render from '@shanhuio/misc/dist/render'
import * as dagdata from '@shanhuio/dags/dist/dagdata'
import * as dag from '@shanhuio/dags/dist/dag'
import * as redraw from '@shanhuio/misc/dist/redraw'

class PageData {
    Graph: dagdata.Graph
}

interface Props { dat: PageData }
class Main extends React.Component<Props, {}> {
    redraw: redraw.Redraw
    dag: dag.Dag

    constructor(props: Props) {
        super(props)
        this.redraw = redraw.NewRedraw(this)
        let dagProp = {
            click: (node: string) => { },
            textWidth: measureDagBox,
        }
        this.dag = new dag.Dag(this.redraw, props.dat.Graph, dagProp)
    }

    render(): JSX.Element {
        return <div className="dag">{this.dag.render()}</div>
    }
}

function measureDagBox(s: string): number {
    let text = jQuery('text#measure').text(s)
    return ((text.get(0) as any) as SVGTextElement).getBBox().width
}

declare var pageData: PageData
jQuery(() => { render.mainElement(<Main dat={pageData} />) })
