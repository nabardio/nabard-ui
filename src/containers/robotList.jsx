import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button, Card, Container, Header, Image,
} from 'semantic-ui-react';
import { fetchRobots, selectRobots } from 'slices/robots';

const RobotList = ({ limit }) => {
  const dispatch = useDispatch();
  const robots = useSelector(selectRobots);

  useEffect(() => {
    dispatch(fetchRobots());
  }, [dispatch]);

  return (
    <Container style={{ paddingTop: '5vh' }}>
      <Button basic style={{ borderRadius: 50 }} floated="right">
        See all
      </Button>
      <Header as="h2" floated="left">
        Robots
      </Header>
      <Card.Group itemsPerRow={4} centered style={{ clear: 'both' }}>
        {robots.slice(0, limit).map((robot) => (
          <Card key={robot.id}>
            <Image src={robot.avatar} wrapped ui={false} size="tiny" />
            <Card.Content>
              <Card.Header as="h3">{robot.name}</Card.Header>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </Container>
  );
};

RobotList.propTypes = {
  limit: PropTypes.number,
};

RobotList.defaultProps = {
  limit: 4,
};

export default RobotList;
