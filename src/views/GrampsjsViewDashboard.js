import {html, css} from 'lit'

import {GrampsjsView} from './GrampsjsView.js'
import './GrampsjsViewRecentlyChanged.js'
import './GrampsjsViewRecentBlogPosts.js'
import './GrampsjsViewAnniversaries.js'
import '../components/GrampsjsHomePerson.js'
import '../components/GrampsjsStatistics.js'

export class GrampsjsViewDashboard extends GrampsjsView {
  static get properties() {
    return {
      dbInfo: {type: Object},
      homePersonDetails: {type: Object},
    }
  }

  constructor() {
    super()
    this.dbInfo = {}
    this.homePersonDetails = {}
  }

  static get styles() {
    return [
      super.styles,
      css`
        .column {
          float: left;
          width: 50%;
          overflow-x: hidden;
        }

        .column:first-child {
          width: calc(50% - 2em);
          padding-right: 2em;
        }

        .column > div {
          margin-bottom: 1.5em;
        }

        @media screen and (max-width: 768px) {
          .column {
            width: 100%;
            padding-right: 0;
          }
        }
      `,
    ]
  }

  renderContent() {
    return html`
      <div class="column">
        <div>
          <grampsjs-home-person
            id="homeperson"
            .strings="${this.strings}"
            .homePersonDetails=${this.homePersonDetails}
          >
          </grampsjs-home-person>
        </div>
        <div>
          <grampsjs-view-anniversaries
            id="anniversaries"
            .strings="${this.strings}"
          >
          </grampsjs-view-anniversaries>
        </div>
        <div>
          <grampsjs-view-recently-changed
            id="recently-changed"
            .strings="${this.strings}"
          >
          </grampsjs-view-recently-changed>
        </div>
      </div>
      <div class="column">
        <div>
          <grampsjs-view-recent-blog-posts
            ?active=${this.active}
            id="recent-blog"
            .strings="${this.strings}"
          >
          </grampsjs-view-recent-blog-posts>
        </div>
        <div>
          <grampsjs-statistics
            .data="${this.dbInfo?.object_counts || {}}"
            id="statistics"
            .strings="${this.strings}"
          >
          </grampsjs-statistics>
        </div>
      </div>
    `
  }
}

window.customElements.define('grampsjs-view-dashboard', GrampsjsViewDashboard)
