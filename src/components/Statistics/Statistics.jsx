import PropTypes from 'prop-types';
import {
  StatisticsContainer,
  Title,
  StatList,
  Label,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <>
      <StatisticsContainer>
        {title ? <Title>{title}</Title> : ''}

        <StatList>
          {stats.map(data => (
            <Label className="label" key={data.id}>
              <span className="label">{data.label}</span>
              <span className="percentage">{data.percentage}</span>
            </Label>
          ))}
        </StatList>
      </StatisticsContainer>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
