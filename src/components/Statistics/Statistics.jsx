import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <>
      <section className="statistics">
        {title && <h2 className="title">{title}</h2>}

        <ul className="stat-list">
          {stats.map(data => (
            <li className="label" key={data.id}>
              <span className="label">{data.label}</span>
              <span className="percentage">{data.percentage}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

//  <li class="item">
//             <span class="label">.docx</span>
//             <span class="percentage">4%</span>
//           </li>
//           <li class="item">
//             <span class="label">.mp3</span>
//             <span class="percentage">14%</span>
//           </li>
//           <li class="item">
//             <span class="label">.pdf</span>
//             <span class="percentage">41%</span>
//           </li>
//           <li class="item">
//             <span class="label">.mp4</span>
//             <span class="percentage">12%</span>
//           </li>
