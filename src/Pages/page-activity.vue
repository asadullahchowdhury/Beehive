<template>
  <div class="row">
    <div class="col-lg-8 ">
      <div class="centered-page-wrapper g-padding">
        <!--activity form-->
        <div class="activity-form-wrapper">
          <form class="activity-form">
            <div class="avatar">
              <a href="#">
                <img src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/1670101867-bpthumb.jpg"
                     alt="" class="img-fluid">
              </a>
            </div>
            <div class="whats-new-content">
              <div class="whats-new-text-area">
                <textarea class="form-control" placeholder="What's New? Nala"> </textarea>
              </div>
              <div class="content-bottom">
                <div class="media-section">
                  <button type="button" class="media-btn">
                    <label class="media-icon">
                      <i class="las la-paperclip"></i>
                      <input type="file" class="d-none">
                    </label>

                    <label class="btn-text">
                      Attach media
                      <input type="file" class="d-none">
                    </label>
                  </button>
                </div>
                <div class="post-section">
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Post in: Profile</option>
                    <option value="1">Post in: Group</option>

                  </select>
                  <div class="each-options">
                    <a href="#">cancel</a>
                    <button type="button" class="btn btn-theme px-5">Post</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div class="tab-header">
          <a href="#" class="title">All Members</a>
          <a href="#" class="">My Groups</a>
          <a href="#" class="">MY Favorites</a>
          <a href="#" class="">Mentions</a>
        </div>

        <!--content section-->
        <div class="content-wrapper">
          <div class="activity-list-wrapper">
            <ul class="activity-list">

              <li class="activity-list-item">
                <div class="activity-avatar">
                  <img src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/1670101867-bpfull.jpg"
                       alt="">
                </div>
                <div class="activity-content">
                  <div class="activity-header">
                    <div class="posted-meta">
                      <p>
                        <a href="#" class="user-name">Nala</a>
                        Joined the group
                        <a href="#" class="grp">
                          <img
                              src="https://mythemestore.com/beehive-preview/wp-content/uploads/group-avatars/4/5e2cc339c9d04-bpthumb.jpg"
                              alt="" class="img-fluid">
                          Backpakers club</a>
                      </p>
                    </div>
                    <div class="date">37 minutes ago</div>
                  </div>

                  <div class="activity-inner">
                    <div class="activity-group">
                      <div class="mini-activity-inner">
                        <div class="mini-cover" style="background-image: url('/assets/images/mini-cover-1.jpg')"></div>
                        <div class="mini-content">
                          <div class="mini-avatar">
                            <a href="#">
                              <img src="/assets/images/activity-avatar-1.jpg" alt="">
                            </a>
                          </div>

                          <div class="mini-info">
                            <h5 class="mini-title">
                              <a href="#">Backpakers Club</a>
                            </h5>

                            <div class="mini-meta">
                              <i class="las la-globe"></i>
                              Public
                            </div>
                          </div>
                          <div class="mini-actions">
                            <button type="button" class="btn btn-outline-theme">
                              <i class="las la-plus"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="activity-action">
                    <a href="#" class="like">
                      <i class="las la-thumbs-up"></i>
                      <span>like</span>
                    </a>
                    <a href="#">Mark as Favorite</a>
                    <a href="#" class="delete">Delete</a>

                  </div>
                </div>
              </li>
              <!-- text post-->
              <li class="activity-list-item">
                <div class="activity-avatar">
                  <img src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/1670101867-bpfull.jpg"
                       alt="">
                </div>
                <div class="activity-content">
                  <div class="activity-header">
                    <div class="posted-meta">
                      <p>
                        <a href="#" class="user-name">Nala</a>
                        Posted an Update
                      </p>
                    </div>
                    <div class="date">2 hour, 35 minutes ago</div>
                  </div>

                  <div class="activity-inner">
                    <p class="Activity-inner-text">Hello!</p>
                  </div>

                  <div class="activity-action">
                    <a href="#" class="like liked">
                      <i class="las la-thumbs-up"></i>
                      liked
                      <span class="count">1</span>
                    </a>
                    <a href="#">Comment
                      <span class="count">1</span>
                    </a>
                    <a href="#">Mark as Favorite</a>
                    <a href="#" class="delete">Delete</a>

                  </div>

                  <div class="activity-comments">
                    <ul>
                      <li class="comment">
                        <div class="comment-avatar">
                          <a href="#">
                            <img
                                src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/1670101867-bpthumb.jpg"
                                alt="">
                          </a>
                        </div>
                        <div class="comment-meta">
                          <a href="#" class="name">nela</a>
                          replied
                          <a href="#" class="activity-since">1 hour, 23 minutes ago</a>
                        </div>
                        <div class="comment-box">
                          <div class="comment-text">This is so fun!</div>
                        </div>
                        <div class="comment-action">
                          <a href="#">Reply</a>
                          <a href="#">Delete</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li class="activity-list-item">
                <div class="activity-avatar">
                  <img src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/1670101867-bpfull.jpg"
                       alt="">
                </div>
                <div class="activity-content">
                  <div class="activity-header">
                    <div class="posted-meta">
                      <p>
                        <a href="#" class="user-name">Nala</a>
                        Joined the group
                        <a href="#" class="grp">
                          <img
                              src="https://mythemestore.com/beehive-preview/wp-content/uploads/group-avatars/4/5e2cc339c9d04-bpthumb.jpg"
                              alt="" class="img-fluid">
                          Backpakers club</a>
                      </p>
                    </div>
                    <div class="date">37 minutes ago</div>
                  </div>

                  <div class="activity-inner">
                    <div class="activity-group">
                      <div class="mini-activity-inner">
                        <div class="mini-cover" style="background-image: url('/assets/images/mini-cover-1.jpg')"></div>
                        <div class="mini-content">
                          <div class="mini-avatar">
                            <a href="#">
                              <img src="/assets/images/activity-avatar-1.jpg" alt="">
                            </a>
                          </div>

                          <div class="mini-info">
                            <h5 class="mini-title">
                              <a href="#">Backpakers Club</a>
                            </h5>

                            <div class="mini-meta">
                              <i class="las la-globe"></i>
                              Public
                            </div>
                          </div>
                          <div class="mini-actions">
                            <button type="button" class="btn btn-outline-theme">
                              <i class="las la-plus"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="activity-action">
                    <a href="#" class="like">
                      <i class="las la-thumbs-up"></i>
                      <span>like</span>
                    </a>
                    <a href="#">Mark as Favorite</a>
                    <a href="#" class="delete">Delete</a>

                  </div>
                </div>
              </li>
              <!-- text post-->
              <li class="activity-list-item">
                <div class="activity-avatar">
                  <img src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/1670101867-bpfull.jpg"
                       alt="">
                </div>
                <div class="activity-content">
                  <div class="activity-header">
                    <div class="posted-meta">
                      <p>
                        <a href="#" class="user-name">Nala</a>
                        Posted an Update
                      </p>
                    </div>
                    <div class="date">2 hour, 35 minutes ago</div>
                  </div>

                  <div class="activity-inner">
                    <p class="Activity-inner-text">Hello!</p>
                  </div>

                  <div class="activity-action">
                    <a href="#" class="like liked">
                      <i class="las la-thumbs-up"></i>
                      liked
                      <span class="count">1</span>
                    </a>
                    <a href="#">Comment
                      <span class="count">1</span>
                    </a>
                    <a href="#">Mark as Favorite</a>
                    <a href="#" class="delete">Delete</a>

                  </div>

                  <div class="activity-comments">
                    <ul>
                      <li class="comment">
                        <div class="comment-avatar">
                          <a href="#">
                            <img
                                src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/1670101867-bpthumb.jpg"
                                alt="">
                          </a>
                        </div>
                        <div class="comment-meta">
                          <a href="#" class="name">nela</a>
                          replied
                          <a href="#" class="activity-since">1 hour, 23 minutes ago</a>
                        </div>
                        <div class="comment-box">
                          <div class="comment-text">This is so fun!</div>
                        </div>
                        <div class="comment-action">
                          <a href="#">Reply</a>
                          <a href="#">Delete</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </div>

      </div>
    </div>
    <div class="col-lg-4">
      <div class="widget-wrapper">
        <div class="widget">
          <h5 class="title">
            Member
          </h5>
          <div class="items-list">
            <a href="#"> Newest</a>
            <span class="bp-separator" role="separator">|</span>
            <a href="#"> Active</a>
            <span class="bp-separator" role="separator">|</span>
            <a href="#">Popular</a>
          </div>


          <div class="item">
            <div class="avatar">
              <img
                  src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/1670101867-bpthumb.jpg"
                  alt="">
            </div>
            <div class="info">
              <div class="name">User</div>
              <div class="time">active 7 minutes ago</div>
            </div>
          </div>

          <div class="item">
            <div class="avatar">
              <img
                  src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/1/6005b5c352343-bpthumb.png"
                  alt="">
            </div>
            <div class="info">
              <div class="name">Sephorioth</div>
              <div class="time">active 7 minutes ago</div>
            </div>
          </div>

          <div class="item">
            <div class="avatar">
              <img
                  src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/4/5e2cc15a94152-bpthumb.jpg"
                  alt="">
            </div>
            <div class="info">
              <div class="name">alexa</div>
              <div class="time">active 7 hours ago</div>
            </div>
          </div>


          <div class="item">
            <div class="avatar">
              <img
                  src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/4/5e2cc15a94152-bpthumb.jpg"
                  alt="">
            </div>
            <div class="info">
              <div class="name">jennifer</div>
              <div class="time">active 30 minutes ago</div>
            </div>
          </div>

          <div class="item">
            <div class="avatar">
              <img
                  src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/14/5e2d01291b6b9-bpthumb.jpg"
                  alt="">
            </div>
            <div class="info">
              <div class="name">User</div>
              <div class="time">active 2 hours ago</div>
            </div>
          </div>

          <div class="item">
            <div class="avatar">
              <img
                  src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/6/5e2cccd55f95b-bpthumb.jpg"
                  alt="">
            </div>
            <div class="info">
              <div class="name">Sophia lee</div>
              <div class="time">active 2 weeks ago</div>
            </div>
          </div>

          <div class="item">
            <div class="avatar">
              <img
                  src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/1670101867-bpthumb.jpg"
                  alt="">
            </div>
            <div class="info">
              <div class="name">User</div>
              <div class="time">active 7 minutes ago</div>
            </div>
          </div>


        </div>
        <div class="footer-widget">
          <a href="#">Home</a>
          <a href="#">About us</a>
          <a href="#">FAQs</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

