import Table from "@/components/ui/Table";
import Col from "@/components/ui/Table/Col";
import Row from "@/components/ui/Table/Row";

const RecentBookings = () => {
  return (
    <div className="bg-white py-8 px-6 rounded-md shadow shadow-gray-100">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-heading">Recent Bookings</h3>
        <button className="underline text-primary font-medium cursor-pointer text-sm transition-all hover:no-underline">
          View All
        </button>
      </div>

      <div className="mt-7">
        <Table
          headings={["#", "Item", "Total", "Paid", "Status", "Completed At"]}
        >
          <Row>
            <Col>#1</Col>
            <Col>
              New York <br />
              Discover America
            </Col>
            <Col>$130</Col>
            <Col>$0</Col>
            <Col>
              <button className="px-4 py-[5px] rounded-full bg-[#FFF8DD] text-[#ffc700] font-medium text-sm">
                Pending
              </button>
            </Col>
            <Col className="text-right">
              04/04/2022
              <p>08:16</p>
            </Col>
          </Row>
          <Row>
            <Col>#2</Col>
            <Col>
              New York <br />
              Discover America
            </Col>
            <Col>$130</Col>
            <Col>$0</Col>
            <Col>
              <button className="px-4 py-[5px] rounded-full bg-[#FFF8DD] text-[#ffc700] font-medium text-sm">
                Pending
              </button>
            </Col>
            <Col className="text-right">
              04/04/2022
              <p>08:16</p>
            </Col>
          </Row>
          <Row>
            <Col>#3</Col>
            <Col>
              New York <br />
              Discover America
            </Col>
            <Col>$130</Col>
            <Col>$0</Col>
            <Col>
              <button className="px-4 py-[5px] rounded-full bg-[#FFF8DD] text-[#ffc700] font-medium text-sm">
                Pending
              </button>
            </Col>
            <Col className="text-right">
              04/04/2022
              <p>08:16</p>
            </Col>
          </Row>
          <Row>
            <Col>#4</Col>
            <Col>
              New York <br />
              Discover America
            </Col>
            <Col>$130</Col>
            <Col>$0</Col>
            <Col>
              <button className="px-4 py-[5px] rounded-full bg-[#FFF8DD] text-[#ffc700] font-medium text-sm">
                Pending
              </button>
            </Col>
            <Col className="text-right">
              04/04/2022
              <p>08:16</p>
            </Col>
          </Row>
          <Row>
            <Col>#5</Col>
            <Col>
              New York <br />
              Discover America
            </Col>
            <Col>$130</Col>
            <Col>$0</Col>
            <Col>
              <button className="px-4 py-[5px] rounded-full bg-[#FFF8DD] text-[#ffc700] font-medium text-sm">
                Pending
              </button>
            </Col>
            <Col className="text-right">
              04/04/2022
              <p>08:16</p>
            </Col>
          </Row>
        </Table>
      </div>
    </div>
  );
};

export default RecentBookings;
