/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import { Layout } from '@components/admin';
import { BiUser, BiSearch } from 'react-icons/bi';
import { Modal, Spinner } from '@components/admin';
import { CourseCard } from '@components/admin/Cards';
import { CoursesList } from '@components/admin/Lists';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { delay } from '@libs/utils';

const CoursesSection: NextPage = () => {
  const [courses, setCourses] = useState<Course[] | undefined>();
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const getCourses = async () => {
    setCourses(undefined);
    await delay(1000);
    const courses = JSON.parse(localStorage.getItem('courses') || '[]');
    setCourses(courses);
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <>
      <section className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0 h-full">
        <header className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold capitalize">
              Cursos em destaque
            </h6>
            <div className="flex">
              <button
                className="flex content-center justify-center bg-blueGray-700 py-3 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setModalOpen(true)}
              >
                Editar
              </button>
            </div>
          </div>
        </header>
        <main>
          {courses ? (
            <DragDropContext
              onDragEnd={result => {
                const { destination, source } = result;

                if (!destination || source.index === destination.index) return;

                // Move o curso de posição
                var draggedCourse = courses.find(
                  course => course.id === result.draggableId
                );
                courses.splice(source.index, 1);
                courses.splice(destination.index, 0, draggedCourse!);

                localStorage.setItem('coursesOrder', JSON.stringify(courses));

                setCourses(courses);
              }}
            >
              <Droppable direction="horizontal" droppableId="courses">
                {provided => {
                  return (
                    <ul
                      className="courses w-full mb-12 px-4 py-6 flex flex-wrap"
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {courses.length > 0 ? (
                        courses.map((course, i) => (
                          <Draggable
                            key={course.id}
                            draggableId={course.id}
                            index={i}
                          >
                            {provided => (
                              <CourseCard
                                course={course}
                                innerRef={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              />
                            )}
                          </Draggable>
                        ))
                      ) : (
                        <div className="flex flex-col justify-center items-center min-h-44 w-full">
                          <h3 className="text-center text-blueGray-700 text-xl font-bold">
                            Nenhum curso em destaque
                          </h3>
                          <BiSearch className="text-4xl mt-2" />
                        </div>
                      )}
                      {provided.placeholder}
                    </ul>
                  );
                }}
              </Droppable>
            </DragDropContext>
          ) : (
            // Spinner
            <div className="flex justify-center items-center min-h-70">
              <Spinner />
            </div>
          )}
        </main>
      </section>
      <Modal
        title={'Titulo'}
        open={isModalOpen}
        closeModal={() => {
          setModalOpen(false);
          getCourses();
        }}
        Icon={BiUser}
        iconBackGroundColor="default"
        size="sm"
        footer={true}
      >
        <div className="divide-y">
          <div>
            <input type="search" name="courses" id="courses" />
          </div>
          <div>
            <CoursesList />
          </div>
        </div>
      </Modal>
    </>
  );
};

CoursesSection.Layout = Layout;
export default CoursesSection;
