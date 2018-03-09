
export const postFriendship = (user1Id, user2Id) => (
  $.ajax({
    url: "/api/friendships",
    method: "POST",
    data: {
      friendship: {
        user1_id: user1Id,
        user2_id: user2Id,
      }
    }
  })
);

export const deleteFriendship = (user1Id, user2Id) => (
  $.ajax({
    url: "/api/friendships",
    method: "DELETE",
    data: {
      friendship: {
        user1_id: user1Id,
        user2_id: user2Id,
      }
    }
  })
);
