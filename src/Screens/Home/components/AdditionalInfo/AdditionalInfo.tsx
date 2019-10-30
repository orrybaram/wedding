import React from 'react';
import './AdditionalInfo.styles.css';
import Detail from '../../../../components/Detail';

const AdditionalInfo = () => {
  return (
    <section className="AdditionalInfo">
      <div className="container">
        <Detail
          label="Accomodations"
          details="Some places to stay in the neighborhood"
        />

        <ul>
          <li>
            <a
              target="_blank"
              href="https://thehoxton.com/new-york/williamsburg/hotels"
            >
              The Hoxton Hotel
            </a>{' '}
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/0B2BqYkvCPpRqNEhiUGtpQlg3Uk5aUUhuVUhUWVRnU1dKaENv/view"
                >
                  Use code HITCHED320 to get 10% off!
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a
              target="_blank"
              href="https://www.thewilliamvale.com/?gclid=Cj0KCQjwgNXtBRC6ARIsAIPP7RuFDIEJ4hqogrfKZBVQBudKrqCo-GyrGcxIb4fJcfIed8BYu9EuEwcaAkEqEALw_wcB"
            >
              The William Vale{' '}
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.mccarrenhotel.com/?gclid=Cj0KCQjwgNXtBRC6ARIsAIPP7RtfkavT2sFDvNuWob6lVR0gp1SunJc1JPbsaynRwbBKe9rVsok0DsEaAkWdEALw_wcB"
            >
              The McCarren{' '}
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://henrynormanhotel.com/?gclid=Cj0KCQjwgNXtBRC6ARIsAIPP7Rsrq0y_ikj3BX_OoO1Y_fw-ZuKWBqt280X0Xc4Mf71M14rrYk7568YaAu2JEALw_wcB"
            >
              Henry Norman
            </a>
          </li>
          <li>
            <a target="_blank" href="https://wythehotel.com/">
              Wythe Hotel
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.thewilliamsburghotel.com/?gclid=Cj0KCQjwgNXtBRC6ARIsAIPP7Rv7uIAys853Xn-tAt45GYgKOmZnGkNjdfl9bPPDU3i4xqq7wAARfMQaAqvnEALw_wcB"
            >
              Williamsburg Hotel
            </a>
          </li>
          <li>
            <a target="_blank" href="https://theboxhousehotel.com/">
              The Box House Hotel
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://franklinguesthouse.com/?gclid=Cj0KCQjwgNXtBRC6ARIsAIPP7RsE3PwcD3bl65o4eHfXVJ_KOKtJaBcyUzmU6hwfTOZxUTlqS0tUU4waAm90EALw_wcB"
            >
              Franklin Guesthouse{' '}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AdditionalInfo;
