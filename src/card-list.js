import { LitElement, html, css } from 'lit';
import "mini-resume/src/mini-resume.js";
import "mini-resume2/src/mini-resume2.js";



class CardList extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    
    .aaronCard{
      display: inline-flex;
      width: 100%;
    }
    .robCard{
      display: inline-flex;
      width: 100%;
    }
    
    
  `;

  constructor() {
    super();
    this.header = 'My Card List';
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
        
        <mini-resume memeTop="me: still doesn't have a professional headshot" shadow-enable memeBottom="still me:" name="Matthew Guiddy" new-color="green" imageURL="https://cdn1.sportngin.com/attachments/roster_player_info/5319/1806/York_U13_A__Matthew_GUIDDY_5_1_115lbs_66_medium.JPG">
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

        <mini-resume memeTop="Live, Laugh" memeBottom="Love" shadow-enable name="Mister Love" imageURL="https://pyxis.nymag.com/v1/imgs/b25/753/ef0495a30eac613c74c5db75f6036ba7fc-14-the-room-tommy-wiseau.rsquare.w700.jpg">
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


    
      <div class="robCard">
        <mini-resume2 shadow-enable imagetoptext="Example text" imagebottomtext="Example text">
          <div slot="infoslot">
            <ul>
              <details class="skills">
                <summary>Skills</summary>
                <li>skills go here</li>
              </details>

              <details class="exp">
                <summary>Work Experience</summary>
                <li>work experince goes here</li>
              </details>

              <details class="course">
                <summary>Relevant Course Work</summary>
                <li>relevant coursework goes here</li>
              </details>
            </ul>
          </div>
        </mini-resume2>

        <mini-resume2 
        name="John John" profilepicture="https://i.scdn.co/image/ab67616d0000b2730b6deb6b039d4481823b3c8d" major="Peace Studies" school="DeVry University" new-color="green" shadow-enable imagetoptext="Yo" imagebottomtext="yo">
          <div slot="infoslot">
            <ul>
              <details class="skills">
                <summary>Skills</summary>
                <li>skills go here</li>
              </details>

              <details class="exp">
                <summary>Work Experience</summary>
                <li>work experince goes here</li>
              </details>

              <details class="course">
                <summary>Relevant Course Work</summary>
                <li>relevant coursework goes here</li>
              </details>
            </ul>
          </div>
        </mini-resume2>

        <mini-resume2 
        name="Jawn Luke" profilepicture="https://pyxis.nymag.com/v1/imgs/b25/753/ef0495a30eac613c74c5db75f6036ba7fc-14-the-room-tommy-wiseau.rsquare.w700.jpg" major="French Food" school="Morris College" new-color="blue" shadow-enable imagetoptext="oui oui" imagebottomtext="bagette">
          <div slot="infoslot">
            <ul>
              <details class="skills">
                <summary>Skills</summary>
                <li>skills go here</li>
              </details>

              <details class="exp">
                <summary>Work Experience</summary>
                <li>work experince goes here</li>
              </details>

              <details class="course">
                <summary>Relevant Course Work</summary>
                <li>relevant coursework goes here</li>
              </details>
            </ul>
          </div>
        </mini-resume2>

        <mini-resume2 
        name="Sam Sung" profilepicture="https://images.genius.com/b7856ba4b9670f426d8b347b3fc20a52.403x363x1.png" major="Puppet Arts" school="Nazarene Bible College" new-color="default" shadow-enable imagetoptext="Top" imagebottomtext="Golf">
          <div slot="infoslot">
            <ul>
              <details class="skills">
                <summary>Skills</summary>
                <li>skills go here</li>
              </details>

              <details class="exp">
                <summary>Work Experience</summary>
                <li>work experince goes here</li>
              </details>

              <details class="course">
                <summary>Relevant Course Work</summary>
                <li>relevant coursework goes here</li>
              </details>
            </ul>
          </div>
        </mini-resume2>

        <mini-resume2 
        name="Janice" profilepicture="https://pbs.twimg.com/profile_images/761959313493504001/IhcScBnQ.jpg" major="Bag Piping" school="Florida Memorial University" new-color="green" shadow-enable imagetoptext="Pipe go" imagebottomtext="yuurrr">
          <div slot="infoslot">
            <ul>
              <details class="skills">
                <summary>Skills</summary>
                <li>skills go here</li>
              </details>

              <details class="exp">
                <summary>Work Experience</summary>
                <li>work experince goes here</li>
              </details>

              <details class="course">
                <summary>Relevant Course Work</summary>
                <li>relevant coursework goes here</li>
              </details>
            </ul>
          </div>
        </mini-resume2>
        






      </div>
      

      
        
    `;
  }
}

customElements.define('card-list', CardList);