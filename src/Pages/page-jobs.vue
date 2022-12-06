<template>
  <div class="row">
    <div class="col-lg-8 ">
      <div class="photos-gallery col-glry">
        <div class="tab-header">
          <a href="#" class="title">All Jobs </a>
          <a href="">Categories</a>
          <a href="#">Manage</a>
          <a href="#">Submit</a>
        </div>
        <!--filter section-->
        <div class="filter-section">
          <div class="search-header ">
            <input type="search" class="form-control shadow-none " placeholder="Keywords">
            <input type="search" class="form-control shadow-none " placeholder="Location">
            <button type="button" class="btn btn-login">
              <img src="images/search.svg" alt="">
            </button>
          </div>

          <button class="btn btn-filter px-5" style="height: 40px;" type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample" aria-expanded="false"
                  aria-controls="collapseExample">
            <i class="las la-sliders-h" style="transform: rotate(90deg)"></i> Filter
          </button>
        </div>
        <div class="collapse-section">
          <div class="collapse" id="collapseExample">
            <div class="filter">
              <div class="checkbox">
                <label for="freelance">Freelance</label>
                <input type="checkbox" class="form-check" id="freelance">
              </div>

              <div class="checkbox">
                <label for="full">Full Time</label>
                <input type="checkbox" class="form-check" id="full">
              </div>

              <div class="checkbox">
                <label for="intern">Internship</label>
                <input type="checkbox" class="form-check" id="intern">
              </div>

              <div class="checkbox">
                <label for="part">Part Time</label>
                <input type="checkbox" class="form-check" id="part">
              </div>

              <div class="checkbox">
                <label for="temporary">Temporary</label>
                <input type="checkbox" class="form-check" id="temporary">
              </div>

            </div>
          </div>
        </div>


        <div class="job-list-wrapper">
          <ul class="job-list">

            <li class="">
              <div class="job-list-item">
                <div class="logo">
                  <img src="https://mythemestore.com/beehive-preview/wp-content/uploads/2020/01/job-logo-9.png"
                       alt="" class="img-fluid">
                </div>

                <div class="job-info">
                  <h4 class="job-title">
                    <a href="#">Sales & Customer Success Manager</a>
                  </h4>
                  <div class="about">
                    <div class="address">4234 Chardonnay Drive, FL, USA</div>
                    <p class="company-name">Nozti Inc</p>
                  </div>
                </div>

                <div class="job-listing-meta">
                  <div class="job-type full">
                    Full time
                  </div>
                </div>
              </div>
            </li>

            <li class="">
              <div class="job-list-item">
                <div class="logo">
                  <img src="https://mythemestore.com/beehive-preview/wp-content/uploads/2020/01/job-logo-8.png"
                       alt="" class="img-fluid">
                </div>

                <div class="job-info">
                  <h4 class="job-title">
                    <a href="#">Marketing Data Enrichment Specialist</a>
                  </h4>
                  <div class="about">
                    <div class="address">3rd street, Perm, Russia</div>
                    <p class="company-name">Clinivex Analytics</p>
                  </div>
                </div>

                <div class="job-listing-meta">
                  <div class="job-type full">
                    Full time
                  </div>
                </div>
              </div>
            </li>

            <li class="">
              <div class="job-list-item">
                <div class="logo">
                  <img src="https://mythemestore.com/beehive-preview/wp-content/uploads/2020/01/job-logo-7.png"
                       alt="" class="img-fluid">
                </div>

                <div class="job-info">
                  <h4 class="job-title">
                    <a href="#">Software Quality Assurance Engineer</a>
                  </h4>
                  <div class="about">
                    <div class="address">4234 Chardonnay Drive, FL, USA</div>
                    <p class="company-name">iSoft Nations </p>
                  </div>
                </div>

                <div class="job-listing-meta">
                  <div class="job-type full">
                    Full time
                  </div>
                </div>
              </div>
            </li>

            <li class="">
              <div class="job-list-item">
                <div class="logo">
                  <img src="https://mythemestore.com/beehive-preview/wp-content/uploads/2020/01/job-logo-5.png"
                       alt="" class="img-fluid">
                </div>

                <div class="job-info">
                  <h4 class="job-title">
                    <a href="#">iOs and Android Developer Needed</a>
                  </h4>
                  <div class="about">
                    <div class="address">3500 Reynolds Alley, IN, USA</div>
                    <p class="company-name">Astray Dennison</p>
                  </div>
                </div>

                <div class="job-listing-meta">
                  <div class="job-type freelance">
                    Freelance
                  </div>
                </div>
              </div>
            </li>

            <li class="">
              <div class="job-list-item">
                <div class="logo">
                  <img src="https://mythemestore.com/beehive-preview/wp-content/uploads/2020/01/job-logo-6.png"
                       alt="" class="img-fluid">
                </div>

                <div class="job-info">
                  <h4 class="job-title">
                    <a href="#">Sales & Customer Success Manager</a>
                  </h4>
                  <div class="about">
                    <div class="address">4234 Chardonnay Drive, FL, USA</div>
                    <p class="company-name">Nozti Inc</p>
                  </div>
                </div>

                <div class="job-listing-meta">
                  <div class="job-type temporary">
                    Temporary
                  </div>
                </div>
              </div>
            </li>

            <li class="">
              <div class="job-list-item">
                <div class="logo">
                  <img src="https://mythemestore.com/beehive-preview/wp-content/uploads/2020/01/job-logo-2.png"
                       alt="" class="img-fluid">
                </div>

                <div class="job-info">
                  <h4 class="job-title">
                    <a href="#">Assistant Manager, Agency Distribution</a>
                  </h4>
                  <div class="about">
                    <div class="address">724 Rivendell Drive, OH, USA</div>
                    <p class="company-name">Mongo Inc</p>
                  </div>
                </div>

                <div class="job-listing-meta">
                  <div class="job-type part-time">
                    Part time
                  </div>
                </div>
              </div>
            </li>

            <li class="">
              <div class="job-list-item">
                <div class="logo">
                  <img src="https://mythemestore.com/beehive-preview/wp-content/uploads/2020/01/job-logo-1.png"
                       alt="" class="img-fluid">
                </div>

                <div class="job-info">
                  <h4 class="job-title">
                    <a href="#">Director Of Development and Communications</a>
                  </h4>
                  <div class="about">
                    <div class="address">4234 Chardonnay Drive, FL, USA</div>
                    <p class="company-name">Nozti Inc</p>
                  </div>
                </div>

                <div class="job-listing-meta">
                  <div class="job-type full">
                    Full time
                  </div>
                </div>
              </div>
            </li>

            <li class="">
              <div class="job-list-item">
                <div class="logo">
                  <img src="https://mythemestore.com/beehive-preview/wp-content/uploads/2020/01/job-logo-3.png"
                       alt="" class="img-fluid">
                </div>

                <div class="job-info">
                  <h4 class="job-title">
                    <a href="#">Business Development Manager</a>
                  </h4>
                  <div class="about">
                    <div class="address">4234 Chardonnay Drive, FL, USA</div>
                    <p class="company-name">Outreach INC</p>
                  </div>
                </div>

                <div class="job-listing-meta">
                  <div class="job-type full">
                    Full time
                  </div>
                </div>
              </div>
            </li>

            <li class="">
              <div class="job-list-item">
                <div class="logo">
                  <img src="https://mythemestore.com/beehive-preview/wp-content/uploads/2020/01/job-logo-4.png"
                       alt="" class="img-fluid">
                </div>

                <div class="job-info">
                  <h4 class="job-title">
                    <a href="#">Sales & Customer Success Manager</a>
                  </h4>
                  <div class="about">
                    <div class="address">4234 Chardonnay Drive, FL, USA</div>
                    <p class="company-name">Nozti Inc</p>
                  </div>
                </div>

                <div class="job-listing-meta">
                  <div class="job-type temporary">
                    Temporary
                  </div>
                </div>
              </div>
            </li>

            <li class="">
              <div class="job-list-item">
                <div class="logo">
                  <img src="https://mythemestore.com/beehive-preview/wp-content/uploads/2020/01/job-logo-9.png"
                       alt="" class="img-fluid">
                </div>

                <div class="job-info">
                  <h4 class="job-title">
                    <a href="#">Sales & Customer Success Manager</a>
                  </h4>
                  <div class="about">
                    <div class="address">4234 Chardonnay Drive, FL, USA</div>
                    <p class="company-name">Nozti Inc</p>
                  </div>
                </div>

                <div class="job-listing-meta">
                  <div class="job-type full">
                    Full time
                  </div>
                </div>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </div>

    <!--right side widget-->
    <div class="col-lg-4">
      <div class="widget-wrapper">
        <div class="widget">
          <h5 class="title-w featured-before-border">
            Featured Jobs
          </h5>
          <div class="items-list">
            <a href="#"> Newest</a>
            <span class="bp-separator" role="separator">|</span>
            <a href="#"> Active</a>
            <span class="bp-separator" role="separator">|</span>
            <a href="#">Popular</a>
          </div>


          <div class="item">
            <div class="image">
              <img class="img-fluid"
                   src="https://mythemestore.com/beehive-preview/wp-content/uploads/2020/01/job-logo-9.png"
                   alt="">
            </div>

            <div class="info">
              <a href="#" class="position">Sales & Customer Success Manager</a>
              <div class="meta full">Full time</div>
            </div>
          </div>

          <div class="item">
            <div class="image">
              <img class="img-fluid"
                   src="https://mythemestore.com/beehive-preview/wp-content/uploads/2020/01/job-logo-8.png"
                   alt="">
            </div>

            <div class="info">
              <a href="#" class="position">Marketing Data Enrichment Specialis</a>
              <div class="meta full">Full time</div>
            </div>
          </div>

          <div class="item">
            <div class="image">
              <img class="img-fluid"
                   src="https://mythemestore.com/beehive-preview/wp-content/uploads/2020/01/job-logo-7.png"
                   alt="">
            </div>

            <div class="info">
              <a href="#" class="position">Software Quality Assurance Engineer</a>
              <div class="meta full">Full time</div>
            </div>
          </div>


          <div class="item">
            <div class="image">
              <img class="img-fluid"
                   src="https://mythemestore.com/beehive-preview/wp-content/uploads/2020/01/job-logo-9.png"
                   alt="">
            </div>

            <div class="info">
              <a href="#" class="position">Sales & Customer Success Manager</a>
              <div class="meta freelance">Freelance</div>
            </div>
          </div>

          <div class="item">
            <div class="image">
              <img class="img-fluid"
                   src="https://mythemestore.com/beehive-preview/wp-content/uploads/2020/01/job-logo-4.png"
                   alt="">
            </div>

            <div class="info">
              <a href="#" class="position">Sales & Customer Success Manager</a>
              <div class="meta temporary">Temporary</div>
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
