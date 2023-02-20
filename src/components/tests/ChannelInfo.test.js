import { screen, render, waitFor } from '@testing-library/react';
import { Route } from 'react-router-dom';
import { withAllContexts, withRouter } from '../../tests/utils';
import ChannelInfo from '../ChannelInfo';

describe('ChannelInfo', () => {
  const fakeYoutube = {
    channelImageURL: jest.fn(),
  };

  afterEach(() => fakeYoutube.channelImageURL.mockReset());

  it('renders correctly', async () => {
    fakeYoutube.channelImageURL.mockImplementation(() => 'url');
    const { asFragment } = renderChannelInfo();
    await waitFor(() => screen.getByRole('img'));

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders without URL', () => {
    fakeYoutube.channelImageURL.mockImplementation(() => {
      throw new Error('error');
    });
    renderChannelInfo();

    expect(screen.queryByRole('img')).toBeNull();
  });

  // snapshot 테스트를 통해 확인할 수 있지만
  // 조금 더 명시적으로 나타내고 싶다면 추가
  it('renders with URL', async () => {
    fakeYoutube.channelImageURL.mockImplementation(() => 'url');
    renderChannelInfo();

    await waitFor(() => expect(screen.getByRole('img')).toBeInTheDocument());
  });

  function renderChannelInfo() {
    return render(
      withAllContexts(
        withRouter(
          <Route path="/" element={<ChannelInfo id="id" name="channel" />} />
        ),
        fakeYoutube
      )
    );
  }
});
