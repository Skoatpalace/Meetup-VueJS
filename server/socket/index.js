module.exports = function (io) {
    io.on('connection', function (socket) {

        socket.on('meetup/subscribe', function (meetupId) {
            console.log('Joining meetup ', `meetup-${meetupId}`);
            socket.join(`meetup-${meetupId}`);
        });

        socket.on('meetup/unsubscribe', function (meetupId) {
            console.log('Leaving meetup ', `meetup-${meetupId}`);
            socket.leave(`meetup-${meetupId}`);
        });

        socket.on('meetup/postSaved', function (post) {
            console.log('emitting to meetup ', `meetup-${post.meetup}`);
            socket.to(`meetup-${post.meetup}`).emit('meeup/postPublished', post);
        });
    })
}


