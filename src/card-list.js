import { LitElement, html, css } from 'lit';
import "mini-resume/src/mini-resume.js";

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class CardList extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    
    .aaronCard{
      display: inline-block;
      width: 100%;
      text-align: center;
    }
    
    
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <div class="aaronCard">
        <mini-resume memeTop="me: doesn't have a professional headshot" memeBottom="also me: " new-color="black" shadow-enable>
          <div slot="infoslot">
            <ul>
              <details class="skills">
                <summary>Skills</summary>
                <li>Placeholder skills</li>
              </details>

              <details class="exp">
                <summary>Work Experience</summary>
                <li>Placeholder work experince</li>
              </details>

              <details class="course">
                <summary>Relevant Course Work</summary>
                <li>Placeholder relevant coursework</li>
              </details>
            </ul>
          </div>
          <div slot="college">
            <h4>Pennsylvania State University</h4>
          </div>
          <div slot="major">
            <h4>B.S. Cybersecurity</h4>
          </div>
        </mini-resume>
        
        <mini-resume memeTop="me: still doesn't have a professional headshot" shadow-enable memeBottom="still me:" name="Matthew Guiddy" new-color="green" imageURL="https://st.depositphotos.com/1269204/1219/i/600/depositphotos_12196477-stock-photo-smiling-men-isolated-on-the.jpg">
          <div slot="infoslot">
            <ul>
              <details class="skills">
                <summary>Skills</summary>
                <li>Placeholder skills</li>
              </details>

              <details class="exp">
                <summary>Work Experience</summary>
                <li>Placeholder work experince</li>
              </details>

              <details class="course">
                <summary>Relevant Course Work</summary>
                <li>Placeholder relevant coursework</li>
              </details>
            </ul>
          </div>
          <div slot="college">
            <h4>University of Pittsburgh</h4>
          </div>
          <div slot="major">
            <h4>B.S. Computer Science</h4>
          </div>
        </mini-resume>

        <mini-resume memeTop="blah" shadow-enable memeBottom="bleh" name="Brim Reaper" new-color="blue" imageURL="https://pbs.twimg.com/media/FajpQj_XwAEwCWw.jpg">
          <div slot="infoslot">
            <ul>
              <details class="skills">
                <summary>Skills</summary>
                <li>Placeholder skills</li>
              </details>

              <details class="exp">
                <summary>Work Experience</summary>
                <li>Placeholder work experince</li>
              </details>

              <details class="course">
                <summary>Relevant Course Work</summary>
                <li>Placeholder relevant coursework</li>
              </details>
            </ul>
          </div>
          <div slot="college">
            <h4>Colgate University</h4>
          </div>
          <div slot="major">
            <h4>Fear The Reaper</h4>
          </div>
        </mini-resume>

        <mini-resume memeTop="me: is a valedictorian and goes to top school" shadow-enable memeBottom="also me: gender studies yaes" name="Finger" new-color="pink" imageURL="https://i.scdn.co/image/ab67616d0000b2730b6deb6b039d4481823b3c8d">
          <div slot="infoslot">
            <ul>
              <details class="skills">
                <summary>Skills</summary>
                <li>Placeholder skills</li>
              </details>

              <details class="exp">
                <summary>Work Experience</summary>
                <li>Placeholder work experince</li>
              </details>

              <details class="course">
                <summary>Relevant Course Work</summary>
                <li>Placeholder relevant coursework</li>
              </details>
            </ul>
          </div>
          <div slot="college">
            <h4>John's Hopkins University</h4>
          </div>
          <div slot="major">
            <h4>B.S. Gender Studies</h4>
          </div>
        </mini-resume>

        <mini-resume memeTop="Live, Laugh" memeBottom="Love" shadow-enable name="Donald Cornbread" imageURL="https://pyxis.nymag.com/v1/imgs/b25/753/ef0495a30eac613c74c5db75f6036ba7fc-14-the-room-tommy-wiseau.rsquare.w700.jpg">
          <div slot="infoslot">
            <ul>
              <details class="skills">
                <summary>Skills</summary>
                <li>Placeholder skills</li>
              </details>

              <details class="exp">
                <summary>Work Experience</summary>
                <li>Placeholder work experince</li>
              </details>

              <details class="course">
                <summary>Relevant Course Work</summary>
                <li>Placeholder relevant coursework</li>
              </details>
            </ul>
          </div>
          <div slot="college">
            <h4>Louisiana State University</h4>
          </div>
          <div slot="major">
            <h4>B.S. Gymnastic Arts</h4>
          </div>
        </mini-resume>
        
      </div>
      

      
        
    `;
  }
}

customElements.define('card-list', CardList);